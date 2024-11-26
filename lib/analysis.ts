import { parse } from "csv/sync";
import * as excel from "xlsx";

export function processVariables(file: File): Promise<string[]> {
  if (file.type === "text/csv") {
    return getVariablesCsv(file);
  } else {
    return getVariablesXlsx(file);
  }
}

export function getVariablesCsv(file: File): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (file.type !== "text/csv") {
      reject(new Error("Invalid type!"));
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        const csv = reader.result as string;
        const records = parse(csv, {
          columns: false,
          skip_empty_lines: true,
        });

        const vars = records[0];
        resolve(vars);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
  });
}

export function getVariablesXlsx(file: File): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      reject(new Error("Invalid file type!"));
      return;
    }

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      try {
        const data = new Uint8Array(reader.result as ArrayBuffer);
        const workbook = excel.read(data, { type: "array" });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        const firstRow = excel.utils.sheet_to_json(worksheet, { header: 1 })[0];
        resolve(firstRow as string[]);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
  });
}

export function getVariableData(file: File, variable: string) {
  if (file.type === "text/csv") {
    return getVariableDataCsv(file, variable);
  } else {
    return getVariableDataXlsx(file, variable);
  }
}

export function getVariableDataCsv(file: File, variable: string) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        const csv = reader.result as string;
        const records = parse(csv, {
          columns: false,
          skip_empty_lines: true,
        });

        const vars = records[0];
        const index = vars.indexOf(variable);
        if (index === -1) {
          reject(new Error("Variable not found"));
          return;
        }

        const result = records.slice(1).map((row: string[]) => row[index]);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
  });
}

export function getVariableDataXlsx(file: File, variable: string) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      try {
        const data = new Uint8Array(reader.result as ArrayBuffer);
        const workbook = excel.read(data, { type: "array" });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        const rows = excel.utils.sheet_to_json(worksheet, { header: 1 });
        const vars = rows[0] as string[];
        const index = vars.indexOf(variable);
        if (index === -1) {
          reject(new Error("Variable not found"));
          return;
        }

        const result = (rows as string[][])
          .slice(1)
          .map((row: string[]) => row[index]);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = () => {
      reject(new Error("Error reading file"));
    };
  });
}

export function translateData(
  dataX: string[] | null,
  dataY: string[] | null
): Array<{ x: string | number; varX: number; varY: number }> {
  if (!dataX || !dataY) {
    return [];
  }

  const result = [];
  for (let i = 0; i < dataX.length; i++) {
    const x = dataX[i];
    const y = dataY[i];
    result.push({ x: i, varX: parseFloat(x), varY: parseFloat(y) });
  }

  return result;
}

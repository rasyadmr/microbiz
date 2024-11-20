export type Steps = {
  title: string;
  text: string;
  image?: string;
};

export type Step = {
  title: string;
  steps: Steps[];
  description?: string;
};
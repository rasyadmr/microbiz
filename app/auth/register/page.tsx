import * as React from "react";
import RegisterPage from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Page() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

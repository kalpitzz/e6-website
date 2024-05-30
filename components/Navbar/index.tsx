"use client";
import React from "react";
import Desktop from "./desktop/Desktop";
import { Mobile } from "./mobile/Mobile";

export function Navbar() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

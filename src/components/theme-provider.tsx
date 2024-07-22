"use client";

import { ThemeProvider as NextThemesProvider } from "next-theme";
import type { ThemeProviderProps } from "next-theme/dist/provider/index.props";

import { FC } from "react";

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return <NextThemesProvider {...props}>{props.children}</NextThemesProvider>;
};
import type { JSX } from "react";

export type ClassValue = string | false | null | undefined;

export type MenuItems = { id: number; path: string; label: string; icon?: JSX.Element; };
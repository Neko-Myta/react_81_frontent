import type { ReactNode } from "react";
export interface RouteObj {
  path?: string;
  element: ReactNode;
  index?: boolean;
  children?: RouteObj[];
}
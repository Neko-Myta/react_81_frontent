import type { Key, ReactNode } from "react";
export interface LayoutProps {
    children: ReactNode
}

export interface NavLinkObj {
    [x: string]: Key | null | undefined;
    to: string;
    linkName: string;
}


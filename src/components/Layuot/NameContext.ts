    import { createContext } from "react";

export type NameContextType = {
  name: string | undefined;
  setName: (name: string) => void;
};

export const NameContext = createContext<NameContextType | null>(null);
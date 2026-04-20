interface Inputprops {
    name: string;
    label?: string;
    type?: "text" | "password" | "email" | "number";
    id?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    example?: string;
    error?: string;
}

export type { Inputprops };
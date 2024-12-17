export interface PillProps {
    title: string
  }

  export interface ButtonProps {
    label: string;
    onClick: (event: MouseEvent) => void;
    variant?: "primary" | "secondary";
  }
  
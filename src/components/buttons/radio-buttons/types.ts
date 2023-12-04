import { ChangeEvent } from "react";

export interface RadioButtonProps {
  selectedVal: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

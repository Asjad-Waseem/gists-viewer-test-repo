import { RadioButtonProps } from "components/buttons/radio-buttons/types";

export interface SearchHeaderProps extends RadioButtonProps {
  searchVal: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: React.MouseEventHandler<HTMLButtonElement>;
}

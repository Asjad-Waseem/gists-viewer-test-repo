import { Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";

import { RadioButtonProps } from "./types";
import { searchType } from "constants";

const RadioButtons = ({
  selectedVal,
  handleChange,
}: RadioButtonProps): JSX.Element => {
  const { regular, debounce } = searchType;

  return (
    <RadioGroup
      row
      aria-label="radio buttons"
      name="radio-buttons-group"
      value={selectedVal}
      onChange={handleChange}
      sx={{ background: "white" }}
    >
      <FormControlLabel
        value={regular}
        control={<Radio sx={{ display: "none" }} />} // Hide the actual radio button
        label={
          <Button
            variant={selectedVal === regular ? "contained" : "outlined"}
            color="primary"
          >
            Regular
          </Button>
        }
      />
      <FormControlLabel
        value={debounce}
        control={<Radio sx={{ display: "none" }} />} // Hide the actual radio button
        label={
          <Button
            variant={selectedVal === debounce ? "contained" : "outlined"}
            color="primary"
          >
            Debounce
          </Button>
        }
      />
    </RadioGroup>
  );
};

export default RadioButtons;

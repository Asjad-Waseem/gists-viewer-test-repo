import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { RadioButtonProps } from "./types";
import { searchType } from "constants";

const RadioButtons = ({
  selectedVal,
  handleChange,
}: RadioButtonProps): JSX.Element => {
  const { regular, debounce } = searchType;
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedVal}
        onChange={handleChange}
      >
        <FormControlLabel
          value={regular}
          label="Regular"
          control={<Radio sx={{ "&.Mui-checked": { color: "white" } }} />}
        />
        <FormControlLabel
          value={debounce}
          label="Debounce"
          control={<Radio sx={{ "&.Mui-checked": { color: "white" } }} />}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;

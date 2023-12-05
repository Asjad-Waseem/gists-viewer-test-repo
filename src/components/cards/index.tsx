import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { CardProps } from "./types";

const CardBasic = ({ onClick, card }: CardProps): JSX.Element => {
  return (
    <Box
      component="div"
      sx={{
        minWidth: 275,
        mt: 2,
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      <Card sx={{ p: 2, textAlign: "left" }}>{card}</Card>
    </Box>
  );
};

export default CardBasic;

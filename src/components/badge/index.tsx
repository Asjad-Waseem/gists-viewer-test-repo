import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { BadgeProps } from "./types";

const Badge = ({ name }: BadgeProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "fit-content",
        borderRadius: "10px",
        backgroundColor: "grey",
        textAlign: "center",
        padding: "5px 10px 5px 10px",
        mt: 1,
        mr: 1,
      }}
    >
      <Typography sx={{ fontSize: "14px", color: "white" }}>{name}</Typography>
    </Box>
  );
};

export default Badge;

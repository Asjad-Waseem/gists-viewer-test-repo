import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import { CardProps } from "./types";

const CardBasic = ({ card }: CardProps): JSX.Element => {
  return (
    // <Box className={optionalClassBox}>
    <Box sx={{ minWidth: 275, mt: 2 }}>
      <Card sx={{ p: 2, textAlign: "left" }}>{card}</Card>
      {/* <Card className={clsx(borderRadiusClass, optionalClassCard)}>{card}</Card> */}
    </Box>
  );
};

export default CardBasic;

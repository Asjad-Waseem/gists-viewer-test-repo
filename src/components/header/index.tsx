import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import RadioButtons from "components/buttons/radio-buttons/index";

import { SearchHeaderProps } from "./types";
import { searchType } from "../../constants";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const SearchHeader = ({
  searchVal,
  selectedVal,
  onChange,
  handleChange,
  handleSearchClick,
}: SearchHeaderProps): JSX.Element => {
  const { regular } = searchType;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
            Gist Viewer
          </Typography>
          <Typography noWrap sx={{ mr: 2, ml: 2, fontWeight: "bold" }}>
            Search type:
          </Typography>
          <RadioButtons selectedVal={selectedVal} handleChange={handleChange} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchVal}
              onChange={onChange}
            />
          </Search>
          {selectedVal === regular && (
            <Button
              variant="contained"
              sx={{ ml: 2 }}
              onClick={handleSearchClick}
            >
              Search
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default SearchHeader;

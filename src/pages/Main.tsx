import { useState } from "react";
import { SearchHeader } from "components";
import { Gists } from "sections";
// import Typography from "@mui/material/Typography";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import { GistsService } from "api/services";

export const Main = (): JSX.Element => {
  const [searchType, setSearchType] = useState<string>("regular");
  const [searchVal, setSearchVal] = useState<string>("");
  const [gistsData, setGistsData] = useState<[]>([]);

  const { fetchAllPublicGistsList } = GistsService;

  const getUserPublicGistsList = () => {
    fetchAllPublicGistsList(searchVal)
      .then(({ data }) => {
        setGistsData(data);
      })
      .catch((err) => {
        console.error("Error fetching gists list:", err);
      });
  };

  console.log(gistsData, "gists data");

  return (
    <>
      <SearchHeader
        searchVal={searchVal}
        selectedVal={searchType}
        onChange={(e) => setSearchVal(e.target.value)}
        handleChange={(e) => setSearchType(e.target.value)}
        handleSearchClick={getUserPublicGistsList}
      />
      <Gists gists={gistsData} />

      {/* <Card sx={{ minWidth: 275, mt: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {searchVal}
            {searchType}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  );
};

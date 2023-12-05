import { useState } from "react";
import { SearchHeader } from "components";
import { Gists } from "sections";
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

  return (
    <>
      <SearchHeader
        searchVal={searchVal}
        selectedVal={searchType}
        onChange={(e) => setSearchVal(e.target.value)}
        handleChange={(e) => setSearchType(e.target.value)}
        handleSearchClick={getUserPublicGistsList}
      />
      {/* @ts-ignore */}
      <Gists gists={gistsData} />
    </>
  );
};

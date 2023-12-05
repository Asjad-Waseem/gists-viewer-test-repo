import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { DetailedView } from "sections";

import { GistsService } from "api/services";

export const GistDetails = (): JSX.Element => {
  // 👇️ get ID from url
  const params = useParams();

  const gistId = params.id;

  const navigate = useNavigate();

  const [gistData, setGistData] = useState();

  const { fetchSingleGistDetails } = GistsService;

  const getUserPublicGistsList = () => {
    if (gistId) {
      fetchSingleGistDetails(gistId)
        .then(({ data }) => {
          setGistData(data);
        })
        .catch((err) => {
          console.error("Error fetching gist", err);
        });
    }
  };

  useEffect(() => {
    getUserPublicGistsList();
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          variant="contained"
          sx={{ ml: 2 }}
          onClick={() => navigate("/")}
        >
          Go back
        </Button>
      </Box>
      <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
        Detailed View
      </Typography>
      {gistData && <DetailedView gist={gistData} />}
    </>
  );
};

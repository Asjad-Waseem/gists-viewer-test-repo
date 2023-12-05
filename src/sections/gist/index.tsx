import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CardBasic, Badge } from "components";

import { GistProps } from "./types";

const Gists = ({ gists }: GistProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 10 }}>
      {gists?.map((gist, index) => {
        // Get an array of values from the files object
        const fileValues = Object.values(gist?.files);
        // Access the first object and fetch the file name
        const firstFileObject = fileValues[0]?.filename;
        // Create a Set to keep track of unique languages
        const uniqueLanguages = new Set();
        return (
          <CardBasic
            key={index}
            onClick={() => navigate(`/gist/${gist?.id}`)}
            card={
              <Box>
                <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
                  First file name: {firstFileObject}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  {gist?.description && "Gist description:"} {gist.description}
                </Typography>
                <Typography sx={{ fontSize: "12px" }}>
                  No. of files: {fileValues?.length}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography
                    sx={{ fontSize: "12px", marginTop: "15px", mr: 1 }}
                  >
                    Badges:
                  </Typography>
                  {fileValues?.map((fileVal: any) => {
                    // Check if the language is truthy and not already added
                    if (
                      fileVal?.language &&
                      !uniqueLanguages.has(fileVal?.language)
                    ) {
                      uniqueLanguages.add(fileVal?.language);
                      return (
                        <Badge
                          key={fileVal?.language}
                          name={fileVal?.language}
                        />
                      );
                    } else if (
                      fileVal?.type &&
                      !uniqueLanguages.has(fileVal?.type)
                    ) {
                      uniqueLanguages.add(fileVal?.type);
                      return <Badge key={fileVal?.type} name={fileVal?.type} />;
                    }
                    return null;
                  })}
                </Box>
              </Box>
            }
          />
        );
      })}
    </Box>
  );
};

export default Gists;

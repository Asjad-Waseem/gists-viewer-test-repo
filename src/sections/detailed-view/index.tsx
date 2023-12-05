import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardBasic, Badge } from "components";

import { DetailedViewProps, ForkObject } from "./types";

const DetailedView = ({ gist }: DetailedViewProps): JSX.Element => {
  // Get an array of values from the files object
  const fileValues = Object.values(gist?.files);
  // Create a Set to keep track of unique languages
  const uniqueLanguages = new Set();

  // Get an array of values from the forks object
  const forksArray = gist?.forks || [];

  // Sort forks by created_at in ascending order
  const sortedForks = [...forksArray].sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  // Take the three oldest forks
  const oldestForks = sortedForks.slice(0, 3);

  return (
    <Box sx={{ mt: 10 }}>
      <CardBasic
        card={
          <Box key={gist?.id}>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              No. of times gist was forked: {gist?.forks?.length}
            </Typography>
            <Box sx={{ fontSize: "12px" }}>
              3 oldes forks:
              {oldestForks.map((fork: ForkObject) => (
                <Box
                  key={fork?.id}
                  sx={{
                    display: "flex",
                    flexDirect: "row",
                    backgroundColor: "#1976D2",
                    borderRadius: "10px",
                    padding: "5px",
                    width: "fit-content",
                    color: "white",
                    mb: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "12px", mr: 1 }}>
                    Username: {fork.user?.login}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", mr: 1 }}>
                    <Typography sx={{ fontSize: "12px", mr: 1 }}>
                      Avatar:
                    </Typography>
                    <img
                      src={fork.user?.avatar_url}
                      alt="Avatar"
                      width={20}
                      height={20}
                    />
                  </Box>
                  <Typography sx={{ fontSize: "12px", mr: 1, color: "white" }}>
                    Link:{" "}
                    <a
                      href={fork.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "white" }}
                    >
                      Gist Link
                    </a>
                  </Typography>
                  <Typography sx={{ fontSize: "12px", mr: 1 }}>
                    Created At: {fork.created_at}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography sx={{ fontSize: "12px", marginTop: "15px", mr: 1 }}>
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
                    <Badge key={fileVal?.language} name={fileVal?.language} />
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
            <Typography sx={{ fontSize: "12px" }}>Files:</Typography>
            {fileValues?.map((fileVal: any, index: number) => (
              <Box
                key={
                  fileVal?.id !== undefined
                    ? fileVal.id
                    : `fallbackKey_${index}`
                }
                sx={{
                  display: "flex",
                  flexDirect: "row",
                  backgroundColor: "#1976D2",
                  borderRadius: "10px",
                  padding: "5px",
                  width: "fit-content",
                  color: "white",
                  mb: 1,
                }}
              >
                <Typography sx={{ fontSize: "12px", mr: 1, marginTop: "13px" }}>
                  File name: {fileVal?.filename}
                </Typography>
                <Typography sx={{ fontSize: "12px", mr: 1, marginTop: "13px" }}>
                  File size: {fileVal?.size}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", mr: 1, marginTop: "13px" }}
                  >
                    Badges:
                  </Typography>
                  <Badge
                    name={
                      fileVal?.language?.length > 0
                        ? fileVal.language
                        : fileVal.type
                    }
                  />
                </Box>
              </Box>
            ))}
          </Box>
        }
      />
    </Box>
  );
};

export default DetailedView;

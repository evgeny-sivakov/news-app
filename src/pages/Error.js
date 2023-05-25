import { Box, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Header from "../components/root/Header";

const categories = [
    { title: "Entertainment", url: "/entertainment" },
    { title: "Health", url: "/health" },
    { title: "Business", url: "/business" },
    { title: "Science", url: "/science" },
    { title: "Sports", url: "/sports" },
    { title: "Technology", url: "/technology" },
  ];
  
function ErrorPage() {
    const error = useRouteError();
    let title = "An error occured!";
    let message = "Something went wrong!";

    if(error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = "Not found!";
        message = "Could not find resource or page."
    }
  return (
    <Container className="root" maxWidth="lg">
      <Box component="header" sx={{ paddingTop: "30px" }}>
        <Header title="JUST NEWS" categories={categories} />
      </Box>
      <Container
        className="root"
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
        <Typography component="p" variant="h5">
          {message}
        </Typography>
      </Container>
    </Container>
  );
}

export default ErrorPage;
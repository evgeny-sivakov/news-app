import { Outlet } from "react-router-dom";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const categories = [
  { title: "Entertainment", url: "entertainment" },
  { title: "Health", url: "health" },
  { title: "General", url: "general" },
  { title: "Business", url: "business" },
  { title: "Science", url: "science" },
  { title: "Sports", url: "sports" },
  { title: "Technology", url: "technology" },
];

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header title="Just news" categories={categories} />
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default RootLayout;

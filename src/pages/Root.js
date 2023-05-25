import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";

const categories = [
  { title: "Entertainment", url: "/entertainment" },
  { title: "Health", url: "/health" },
  { title: "Business", url: "/business" },
  { title: "Science", url: "/science" },
  { title: "Sports", url: "/sports" },
  { title: "Technology", url: "/technology" },
];

function RootLayout() {
  return (
    <>
      <Container className="root" maxWidth="lg">
        <Box component="header" sx={{ paddingTop: "30px" }}>
          <Header title="JUST NEWS" categories={categories} />
        </Box>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer
        title="About NEWS API"
        description="Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API"
      />
    </>
  );
}

export default RootLayout;

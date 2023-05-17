import { Outlet } from "react-router-dom";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";
import Container from "@mui/material/Container";
import React from "react";
import { Box } from "@mui/material";

const categories = [
  { title: "Entertainment", url: "entertainment" },
  { title: "Health", url: "health" },
  { title: "General", url: "general" },
  { title: "Business", url: "business" },
  { title: "Science", url: "science" },
  { title: "Sports", url: "sports" },
  { title: "Technology", url: "technology" },
];



function RootLayout() {
  return (
    <>
      <Container className="root" maxWidth="lg">
        <Box component='header' sx={{paddingTop: '30px',}}>
          <Header title="JUST NEWS" categories={categories} />
        </Box>
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}

export default RootLayout;

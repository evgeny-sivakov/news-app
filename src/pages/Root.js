import { Outlet } from "react-router-dom";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";
import Container from "@mui/material/Container";
import React from "react";

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
        <Header title="JUST NEWS" categories={categories} />
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

import { Outlet } from "react-router-dom";
import Header from "../components/root/Header";
import Footer from "../components/root/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';



const sections = [
  { title: "Entertainment", url: "#" },
  { title: "Health", url: "#" },
  { title: "General", url: "#" },
  { title: "Business", url: "#" },
  { title: "Science", url: "#" },
  { title: "Sports", url: "#" },
  { title: "Technology", url: "#" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header title="Just news" sections={sections} />
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

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import StartPage, { loader as generalArticlesLoader } from "./pages/Start";
import RootLayout from "./pages/Root";
import CategoryPage, {
  loader as categoryArticlesLoader,
} from "./pages/Category";
import FullArticlePage from "./pages/FullArticle";
import SubscribePage from "./pages/Subscribe";
import SignUpPage from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <StartPage />, loader: generalArticlesLoader },
      {
        path: ":categoryID",
        id: "category",
        children: [
          {
            index: true,
            element: <CategoryPage />,
            loader: categoryArticlesLoader,
          },
          {
            path: ":articleID",
            id: "full-article",
            element: <FullArticlePage />,
          },
        ],
      },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
  { path: "subscribe", element: <SubscribePage /> },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;

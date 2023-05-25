import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import StartPage, { loader as generalArticlesLoader } from "./pages/Start";
import RootLayout from "./pages/Root";
import CategoryPage, {
  loader as categoryArticlesLoader,
} from "./pages/Category";
import FullArticlePage from "./pages/FullArticle";
import SubscribePage, { action as subscribeAction } from "./pages/Subscribe";
import QueryPage, { action as searchAction } from "./pages/Query";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <StartPage />, loader: generalArticlesLoader },
      { path: "query", element: <QueryPage />, action: searchAction },
      {
        path: ":categoryID",
        id: "category-page",
        loader: categoryArticlesLoader,
        children: [
          {
            index: true,
            element: <CategoryPage />,
          },
          {
            path: ":articleID",
            element: <FullArticlePage />,
          },
        ],
      },
      {
        path: "subscribe",
        element: <SubscribePage />,
        action: subscribeAction,
      },
    ],
  },
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

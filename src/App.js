import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage, { loader as generalArticlesLoader } from "./pages/Start";
import RootLayout from "./pages/Root";
import { CssBaseline } from "@mui/material";
import CategoryPage, {
  loader as categoryArticlesLoader,
} from "./pages/Category";
import FullArticlePage from "./pages/FullArticle";

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
    ],
  },
]);

function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;

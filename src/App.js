import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage, { loader as generalArticlesLoader } from "./pages/Start";
import QueryPage from "./pages/Query";
import NewsDetailsPage from "./pages/NewsDetails";
import RootLayout from "./pages/Root";
import { CssBaseline } from "@mui/material";
import CategoryPage, {
  loader as categoryArticlesLoader,
} from "./pages/Category";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <StartPage />, loader: generalArticlesLoader },
      {
        path: ":categoryID",
        id: "category",
        children: [{ index: true, element: <CategoryPage />, loader: categoryArticlesLoader }],
      },
      { path: ":queryString", id: "query-page", element: <QueryPage /> },
      { path: ":newsID", element: <NewsDetailsPage /> },
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

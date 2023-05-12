import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/Start";
import QueryPage from "./pages/Query";
import NewsDetailsPage from "./pages/NewsDetails";
import RootLayout from "./pages/Root";
import { CssBaseline } from "@mui/material";
import CategoryPage from "./pages/Category";


const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <StartPage />},
    {path: ':categoryID', id: 'category', children: [
      {index: true, element: <CategoryPage />}
    ]},
    {path: ':queryString', id: 'query-page', element: <QueryPage />},
    {path: ':newsID', element: <NewsDetailsPage />}
  ]}
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

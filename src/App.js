import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartPage from "./pages/Start";
import QueryPage from "./pages/Query";
import NewsDetailsPage from "./pages/NewsDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {index: true, element: <StartPage />},
    {path: ':queryString', id: 'query-page', element: <QueryPage />},
    {path: ':newsID', element: <NewsDetailsPage />}
  ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

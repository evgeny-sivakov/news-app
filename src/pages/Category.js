import { Suspense } from "react";
import {
  defer,
  Await,
  useParams,
  useRouteLoaderData,
  json,
} from "react-router-dom";
import { capitalize } from "lodash";
import Feed from "../components/feed/Feed";

function CategoryPage() {
  const { articles } = useRouteLoaderData("category-page");
  const params = useParams();
  const categoryID = params.categoryID;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={articles}>
        {(loadedArticles) => (
          <Feed
            categoryID={categoryID}
            title={capitalize(categoryID)}
            articles={loadedArticles}
          />
        )}
      </Await>
    </Suspense>
  );
}

export default CategoryPage;

async function loadCategoryArticles(categoryID) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${categoryID}&apiKey=97ea32e9fd2e4d4e884ea8ea9b5d169c`
  );
  if (!response.ok) {
    throw json({ message: "Could not load articles" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.articles;
  }
}

export function loader({ params }) {
  const categoryID = params.categoryID;
  return defer({
    articles: loadCategoryArticles(categoryID),
  });
}

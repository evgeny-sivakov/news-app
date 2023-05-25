import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import ArticleDetails from "../components/article/ArticleDetails";
import { Suspense } from "react";

function FullArticlePage() {
  const params = useParams();
  const articleID = params.articleID;
  const { articles } = useRouteLoaderData("category-page");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={articles}>
        {(loadedArticles) => (
          <ArticleDetails article={loadedArticles[articleID]} />
        )}
      </Await>
    </Suspense>
  );
}

export default FullArticlePage;

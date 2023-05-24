import { Await, useParams, useRouteLoaderData } from "react-router-dom";
import ArticleDetails from "../components/article/ArticleDetails";
import { Suspense } from "react";

/*const article = {
  author: "https://www.facebook.com/bbcnews",
  content:
    "Thai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every predThai voters have delivered a stunning verdict in favour of an opposition party that is calling for radical reform of the country's institutions. \r\nEarly results show Move Forward exceeding every pred",
  description:
    "Early results show Move Forward exceeding predictions to win 151 of the 500 seats in the lower house.",
  publishedAt: "2023-05-15T08:29:13Z",
  source: { id: null, name: "BBC News" },
  title:
    "Thailand elections: Voters deliver stunning blow to army-backed rule - BBC",
  url: "https://www.bbc.com/news/world-asia-65567781",
  urlToImage:
    "https://ichef.bbci.co.uk/news/1024/branded_news/C028/production/_129729194_reuters.png",
};

const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
}); */

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

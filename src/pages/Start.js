import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import Feed from "../components/feed/Feed";

function StartPage() {
  const { articles } = useLoaderData();
  const index = Math.floor(Math.random() * 20);
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={articles}>
        {(loadedArticles) => (
          <Feed
            mainFeaturedPost={loadedArticles[index]}
            articles={loadedArticles}
            categoryID="general"
          />
        )}
      </Await>
    </Suspense>
  );
}

export default StartPage;

async function loadArticles() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=97ea32e9fd2e4d4e884ea8ea9b5d169c"
  );
  if (!response.ok) {
    throw json({ message: "Could not load articles" }, { status: 500 });
  } else {
    const resData = await response.json();
    const articles = resData.articles;
    return articles;
  }
}

export function loader() {
  return defer({
    articles: loadArticles(),
  });
}

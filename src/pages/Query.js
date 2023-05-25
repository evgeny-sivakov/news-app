import { json, redirect, useActionData } from "react-router-dom";
import Feed from "../components/feed/Feed";

function QueryPage() {
  const articles = useActionData();
  return (
    <Feed articles={articles} title="Search results" categoryID="search" />
  );
}

export default QueryPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const q = data.get("query-string");

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${q}&apiKey=97ea32e9fd2e4d4e884ea8ea9b5d169c`
  );
  if (!response.ok) {
    throw json({ message: "Could not load articles" }, { status: 500 });
  } else {
    const resData = await response.json();
    redirect("/query");
    return resData.articles;
  }
}

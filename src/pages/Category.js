import { Suspense } from 'react';
import { defer, Await, useParams, useRouteLoaderData } from 'react-router-dom';
import { capitalize } from 'lodash';
import Feed from "../components/feed/Feed";

/* const ARTICLES = [
  {
    id: "a1",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "First Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
  {
    id: "a2",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Second Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
  {
    id: "a3",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Third Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
  {
    id: "a4",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Fourth Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
  {
    id: "a5",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Fifth Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
  {
    id: "a6",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Sixth Article",
    description: "Very interesting article",
    date: new Date().toDateString()
  },
];
*/

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random/?blog/',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

function CategoryPage() {
  const { articles } = useRouteLoaderData("category-page");
  console.log(articles)
  const params = useParams();
  const categoryID = params.categoryID;

    return (
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={articles}>
        {(loadedArticles) => <Feed
        categoryID={categoryID}
        title={capitalize(categoryID)}
        mainFeaturedPost={mainFeaturedPost}
        articles={loadedArticles}
      />}
      </Await>
    </Suspense>
    );
}

export default CategoryPage;

async function loadCategoryArticles(categoryID) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryID}&apiKey=97ea32e9fd2e4d4e884ea8ea9b5d169c`);
  const resData = await response.json();
  return resData.articles;
};

export function loader({params}) {
  const categoryID = params.categoryID;
  return defer({
    articles: loadCategoryArticles(categoryID),
  })
}
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Feed from "../components/feed/Feed";
import { defer, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import { capitalize } from 'lodash';

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

const sidebar = {
  title: 'News API',
  description:
    'Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API',
  social: [
    { name: 'GitHub', icon: GitHubIcon, link: 'https://github.com/News-API-gh' },
    { name: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/NewsAPIorg' },
  ],
};

function CategoryPage() {
  const { articles, categoryID } = useLoaderData();
    return (
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={articles}>
        {(loadedArticles) => <Feed
        categoryID={categoryID}
        title={capitalize(categoryID)}
        mainFeaturedPost={mainFeaturedPost}
        articles={loadedArticles}
        sidebar={sidebar}
      />}
      </Await>
    </Suspense>
    );
}

export default CategoryPage;

async function loadCategoryArticles(categoryID) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=pl&category=${categoryID}&apiKey=97ea32e9fd2e4d4e884ea8ea9b5d169c`);
  const resData = await response.json();
  const articles = resData.articles.map(article => ({...article, image: 'https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg='}))
  return articles;
};

export function loader({params}) {
  const categoryID = params.categoryID;
  // const categoryTitle = capitalize(categoryID);
  return defer({
    articles: loadCategoryArticles(categoryID),
    categoryID
  })
}
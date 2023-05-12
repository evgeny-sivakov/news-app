import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Feed from "../components/feed/Feed";

const ARTICLES = [
  {
    id: "a1",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "First Article",
    description: "Very interesting article",
  },
  {
    id: "a2",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Second Article",
    description: "Very interesting article",
  },
  {
    id: "a3",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Third Article",
    description: "Very interesting article",
  },
  {
    id: "a4",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Fourth Article",
    description: "Very interesting article",
  },
  {
    id: "a5",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Fifth Article",
    description: "Very interesting article",
  },
  {
    id: "a6",
    image:
      "https://media.istockphoto.com/id/1264074047/pl/wektor/naj%C5%9Bwie%C5%BCsze-informacje-w-tle.jpg?s=1024x1024&w=is&k=20&c=s8_Y-S1AS1GGOCBB6XOSKX3kdm5lhpRy0eTWlullPjg=",
    title: "Sixth Article",
    description: "Very interesting article",
  },
];

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
    return (
      <Feed
        mainFeaturedPost={mainFeaturedPost}
        articles={ARTICLES}
        sidebar={sidebar}
      />
    );
}

export default CategoryPage;
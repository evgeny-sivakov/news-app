import ArticlesList from "../components/ArticlesList";


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

function StartPage() {
    return (
      <>
        <h1>Start Page</h1>
        <ArticlesList articles={ARTICLES} />
      </>
    );
}

export default StartPage;
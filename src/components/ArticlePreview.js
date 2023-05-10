import { Link } from "react-router-dom";
import classes from './ArticlePreview.module.css';

function ArticlePreview(article) {
  return (
    <article>
      <img src={article.image} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <Link to="details">Read more</Link>
    </article>
  );
}

export default ArticlePreview;
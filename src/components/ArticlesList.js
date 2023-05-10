import ArticlePreview from "./ArticlePreview";
import classes from './ArticlesList.module.css'

function ArticlesList({articles}) {
  return <div>
    <h1>All articles</h1>
    <ul className={classes.list}>
        {articles.map((article) => (
            <li key={article.id}>
              <ArticlePreview
                image={article.image}
                title={article.title}
                description={article.description}
              />
            </li>
        ))}
    </ul>
  </div>
}

export default ArticlesList;
import MainFeaturedPost from "./MainFeaturedPost";
import Grid from '@mui/material/Grid';
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Feed({mainFeaturedPost, articles, sidebar}) {
    return (
      <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {articles.map((article) => (
          <FeaturedPost key={article.title} post={article} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title="From the firehose" posts={articles} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
    );
}

export default Feed;
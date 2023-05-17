import MainFeaturedPost from "./MainFeaturedPost";
import Grid from '@mui/material/Grid';
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Box, Typography } from "@mui/material";

function Feed({mainFeaturedPost, articles, sidebar, title, categoryID}) {
    return (
      <>
        <Box sx={{padding: '20px 0'}}>
          <Typography component="h2" variant="h4" align="center">
            {title}
          </Typography>
        </Box>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {articles.map((article) => (
            <FeaturedPost
              key={article.title}
              article={article}
              categoryID={categoryID}
            />
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
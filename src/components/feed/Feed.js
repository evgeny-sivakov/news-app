import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";

function Feed({ articles, title, categoryID }) {
  const index = Math.floor(Math.random() * 20);
  const mainFeaturedPost = articles[index];
  return (
    <>
      <Box sx={{ paddingTop: "20px" }}>
        <MainFeaturedPost
          post={mainFeaturedPost}
          categoryID={categoryID}
          index={index}
        />
      </Box>
      <Box sx={{ paddingBottom: "30px" }}>
        <Typography component="h2" variant="h4" align="center">
          {title}
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <FeaturedPost
            key={index}
            article={article}
            categoryID={categoryID}
            articleIndex={index}
          />
        ))}
      </Grid>
    </>
  );
}

export default Feed;

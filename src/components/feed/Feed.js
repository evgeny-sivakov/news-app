import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";


function Feed({mainFeaturedPost, articles, title, categoryID}) {
    return (
      <>
        <Box sx={{ padding: "20px 0" }}>
          <Typography component="h2" variant="h4" align="center">
            {title}
          </Typography>
        </Box>
        <MainFeaturedPost post={mainFeaturedPost} categoryID={categoryID} />
        <Grid container spacing={4} >
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
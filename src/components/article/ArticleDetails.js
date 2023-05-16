import { Box, Typography } from "@mui/material";

function ArticleDetails({article, date}) {
    return (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "20px",
            }}
          >
            <Typography component="h1" variant="h3">
              {article.title}
            </Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Typography>{date}</Typography>
              <Typography>{article.source.name}</Typography>
            </Box>
            <img src={article.urlToImage} alt={article.title} />
            <Typography>{article.content}</Typography>
          </Box>
        </>
      );
}

export default ArticleDetails;
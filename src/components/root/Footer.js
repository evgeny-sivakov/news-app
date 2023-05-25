import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { LinkedIn } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ display: "flex", gap: "10px", justifyContent: "center" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/eugenesivakou/">
        <LinkedIn />
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          component="a"
          href="https://newsapi.org/"
          variant="h6"
          sx={{ display: "block", align: "center", textDecoration: "none" }}
          align="center"
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
          gutterBottom
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;

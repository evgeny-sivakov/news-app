import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/material/Link";
import { InputBase, Paper } from "@mui/material";
import { useSubmit } from "react-router-dom";

function Header(props) {
  const [inputValue, setInputValue] = React.useState("");
  const { categories, title } = props;
  const submit = useSubmit();
  const searchHandler = (event) => {
    event.preventDefault();
    submit(event.currentTarget, { method: "put", action: "/query" });
    setInputValue("");
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
          paddingBottom: { xs: "10px", md: 0, lg: 0 },
        }}
      >
        <Button href="/subscribe" size="small">
          Subscribe
        </Button>
        <Link
          href="/"
          sx={{ textDecoration: "none", fontSize: "3rem", color: "black" }}
        >
          {title}
        </Link>
        <Paper
          component="form"
          onSubmit={searchHandler}
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            name="query-string"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search news"
            inputProps={{ "aria-label": "search news" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-evenly", overflowX: "auto" }}
      >
        {categories.map((category) => (
          <Link
            color="inherit"
            noWrap
            key={category.title}
            variant="body2"
            href={category.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {category.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;

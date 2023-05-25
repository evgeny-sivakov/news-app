import { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import SubscribeForm from "../components/subscribe/SubscribeForm";
import { useActionData } from "react-router-dom";

function SubscribePage() {
  const subscribed = useActionData();
  const [isSubsribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsSubscribed(subscribed);
  }, [subscribed]);

  return (
    <Container
      className="root"
      maxWidth="sm"
      sx={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {!isSubsribed && <SubscribeForm />}
      {isSubsribed && (
        <Paper
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "20px",
          }}
        >
          <CheckBoxIcon fontSize="large" color="success" />
          <Typography>
            You're succesfully subscribed to our weekly newsletter with just the
            most important news!
          </Typography>
        </Paper>
      )}
    </Container>
  );
}

export default SubscribePage;

export function action() {
  return true;
}

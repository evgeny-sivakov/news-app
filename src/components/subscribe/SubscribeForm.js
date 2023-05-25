import { Box, Button, TextField } from "@mui/material";
import { useSubmit } from "react-router-dom";

function SubscribeForm() {
  const submit = useSubmit();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
    submit(null, { method: "POST", action: "/subscribe" });
  };

  return (
    <Box
      component="form"
      onSubmit={submitHandler}
      noValidate
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        margin="normal"
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}

export default SubscribeForm;

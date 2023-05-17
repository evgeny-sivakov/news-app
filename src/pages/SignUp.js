import { Container } from "@mui/material";
import SignUpForm from "../components/signup/SignUpForm";

function SignUpPage() {
  return (
    <Container className="root" maxWidth="sm">
      <SignUpForm />
    </Container>
  );
}

export default SignUpPage;
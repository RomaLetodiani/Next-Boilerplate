import { LoginFeatures } from "@/components/(auth)/login/features/login-features";
import { LoginForm } from "@/components/(auth)/login/form/login-form";
import { LoginPageWrapper } from "@/components/(auth)/login/login-page-wrapper";

const SignIn = async () => (
  <LoginPageWrapper>
    <LoginForm />
    <LoginFeatures />
  </LoginPageWrapper>
);

export default SignIn;

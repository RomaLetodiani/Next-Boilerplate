import { LoginFeatures } from "@/components/(auth)/login/features/login-features";
import { LoginForm } from "@/components/(auth)/login/form/login-form";
import { LoginPageWrapper } from "@/components/(auth)/login/login-page-wrapper";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <LoginPageWrapper>
      <LoginForm />
      <LoginFeatures />
    </LoginPageWrapper>
  );
};

export default SignIn;

import { AuthLayout } from "@/shared/components/AuthLayout/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm/LoginForm";

export default function LoginPage (){
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

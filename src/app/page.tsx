import { LoginPage } from "@/views/LoginPage";
import { AuthLayout } from "@/shared/components/AuthLayout";

export default function Page() {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
}

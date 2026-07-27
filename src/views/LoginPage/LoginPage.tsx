import { AuthLayout } from '@/shared/components/AuthLayout/AuthLayout';
import { LoginForm } from '@/Features/auth/components/LoginForm/LoginForm';

export function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

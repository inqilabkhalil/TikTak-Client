import { RegisterForm } from '@/Features/auth/components/RegisterForm';
import { AuthLayout } from '@/shared/components/AuthLayout';

export function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}

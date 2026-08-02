import { AuthLayout } from "@/shared/components/AuthLayout";
import { PageTransition } from "@/shared/components/PageTransition";

export default function AuthRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthLayout>
      <PageTransition>{children}</PageTransition>
    </AuthLayout>
  );
}

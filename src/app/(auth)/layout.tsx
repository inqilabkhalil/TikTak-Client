import { PageTransition } from "@/shared/components/PageTransition";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageTransition>{children}</PageTransition>;
}

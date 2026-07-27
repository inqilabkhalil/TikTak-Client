import type { Metadata } from "next";
import { OrdersTable } from '@/features/account';

export const metadata: Metadata = {
  title: "Sifarişlərim | TikTak",
  description: "Keçmiş sifarişlərinizin siyahısı.",
};

export default function OrdersPage() {
  return (
    <div>
      <OrdersTable />
    </div>
  );
}

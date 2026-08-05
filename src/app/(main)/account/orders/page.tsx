
import OrdersTable from "@/features/account/components/OrdersTable/OrdersTable";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Sifarişlərim | TikTak',
  description: 'Keçmiş sifarişlərinizin siyahısı.',
};

export default function OrdersPage() {
  return (
    <div>
      <OrdersTable />
    </div>
  );
}

import { SuccessScreen } from '@/features/checkout/components/SuccessScreen';
import { ROUTES } from '@/shared/constants';

type OrderSuccessPageProps = {
  orderNumber?: string;
};

export const OrderSuccessPage = ({ orderNumber }: OrderSuccessPageProps) => {
  return (
    <SuccessScreen
      title="Sifarişiniz qəbul edildi"
      description="Əməkdaşlarımız sizinlə əlaqə saxlayıb sifarişinizi göndərəcəklər."
      orderNumber={orderNumber}
      redirectTo="/category/some-slug"
      redirectDuration={5}
    />
  );
};

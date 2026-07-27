import type { Metadata } from 'next';
import { PersonalInfoForm } from '@/Features/account';

export const metadata: Metadata = {
  title: 'Hesab məlumatlarım | TikTak',
  description: 'Şəxsi hesab məlumatlarınızı idarə edin.',
};

export default function page() {
  return (
    <div>
      <PersonalInfoForm />
    </div>
  );
}

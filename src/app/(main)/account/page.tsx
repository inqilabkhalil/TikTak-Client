import type { Metadata } from "next";
import { PersonalInfoForm } from '@/features/account';

export const metadata: Metadata = {
  title: "Hesab məlumatlarım | TikTak",
  description: "Şəxsi hesab məlumatlarınızı idarə edin.",
};

export default function page() {
  return (
    <div>
      <PersonalInfoForm />
    </div>
  );
}

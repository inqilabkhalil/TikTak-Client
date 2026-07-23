import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Səhifə tapılmadı</h1>
      <Link href="/">Ana səhifəyə qayıt</Link>
    </div>
  );
}

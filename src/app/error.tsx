"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Xəta baş verdi</h1>
      <button onClick={() => reset()}>Yenidən cəhd et</button>
    </div>
  );
}

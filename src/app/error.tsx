'use client';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h1>Xəta baş verdi</h1>
      <button onClick={() => reset()}>Yenidən cəhd et</button>
    </div>
  );
}

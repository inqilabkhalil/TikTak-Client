export const EmptyStateIcon = ({ size = 200 }: { size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dairə (arxa fon) */}
      <circle cx="100" cy="100" r="100" fill="#E5E7EB" />
      
      {/* X işarəsi */}
      <path
        d="M70 70 L130 130 M130 70 L70 130"
        stroke="#FFFFFF"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
};
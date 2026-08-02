export const formatAzPhone = (digits: string): string => {
  const d = digits.replace(/\D/g, "").slice(0, 9);

  const parts: string[] = [];
  if (d.length > 0) parts.push(d.slice(0, 2));           // 51
  if (d.length > 2) parts.push(d.slice(2, 5));           // 359
  if (d.length > 5) parts.push(d.slice(5, 7));           // 40
  if (d.length > 7) parts.push(d.slice(7, 9));           // 90

  return parts.join(" ");
};
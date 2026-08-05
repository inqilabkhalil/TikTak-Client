export const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
} as const;

export const AUTH_MESSAGES = {
  DEFAULT_ERROR: "Xəta baş verdi",
  LOGIN_ERROR: "Telefon və ya parol yanlışdır",
  REGISTER_ERROR: "Qeydiyyat zamanı xəta baş verdi",

  LOGIN_SUCCESS: "Uğurla daxil oldunuz",
  REGISTER_SUCCESS: "Qeydiyyat uğurla tamamlandı",
  LOGOUT_SUCCESS: "Hesabdan çıxdınız",

  USER_ALREADY_EXISTS: "Bu nömrə artıq qeydiyyatdadır",
  WRONG_PASSWORD: "Parol yanlışdır",
  USER_NOT_FOUND: "İstifadəçi tapılmadı",
} as const;

export const translateAuthError = (error: string): string => {
  const errorMap: Record<string, string> = {
    "User is already exists": AUTH_MESSAGES.USER_ALREADY_EXISTS,
    "Invalid credentials": AUTH_MESSAGES.LOGIN_ERROR,
    "Password is wrong!": AUTH_MESSAGES.WRONG_PASSWORD,
    "Password is wrong": AUTH_MESSAGES.WRONG_PASSWORD,
    "User not found": AUTH_MESSAGES.USER_NOT_FOUND,
    "User not found!": AUTH_MESSAGES.USER_NOT_FOUND,
  };

  return errorMap[error] ?? error;
};

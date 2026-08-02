export interface LoginValues {
  phone: string;
  password: string;
}

export interface RegisterValues {
  name: string;
  phone: string;
  password: string;
}

export interface AuthTabsProps {
  active: "login" | "register";
}

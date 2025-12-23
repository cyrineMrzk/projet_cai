export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  message?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}
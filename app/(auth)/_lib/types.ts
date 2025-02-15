type LoginFormData = {
  email: string;
  password: string;
};

type RegisterFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
};

export type { LoginFormData, RegisterFormData };

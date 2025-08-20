export interface IUserAuthenticationProps {
  username?: string;
  email?: string;
  password: string;
}

export interface ICreateUserProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface IValidateRefreshTokenRequestProps {
  refreshToken: string;
}


import { apiClient, apiServer } from "@/lib/api";
import { ICreateUserProps, IUserAuthenticationProps, IValidateRefreshTokenRequestProps } from "../models/auth.model";

const authService = async (data: IUserAuthenticationProps) => {
  return await apiServer.post("/users/sign-in", data);
};

const validateRefreshToken = async (data: IValidateRefreshTokenRequestProps) => {
  return apiServer.post("/user-session/validate-refresh-token", data);
};

const createUser = async (data: ICreateUserProps) => {
  return await apiClient.post("/users/sign-up", data);
};


export { authService, createUser, validateRefreshToken };


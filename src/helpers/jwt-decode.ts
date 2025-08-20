import { IDecodedUserPayloadProps } from "@/types/jwt-payload";
import { jwtDecode } from "jwt-decode";

export const decodeJwt = (token: string): IDecodedUserPayloadProps => {
  return jwtDecode<IDecodedUserPayloadProps>(token);
};
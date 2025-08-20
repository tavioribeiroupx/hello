import { JwtPayload } from "jwt-decode";

export interface IDecodedUserPayloadProps extends JwtPayload {
  jti: string;
  iat: number;
  exp: number;
}
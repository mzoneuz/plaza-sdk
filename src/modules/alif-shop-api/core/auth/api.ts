import { CallerPayload } from "@/common";

import * as Types from "./types";

const tokenHeaders = { "content-type": "application/x-www-form-urlencoded" };

export const GetToken: CallerPayload<Types.AuthApi.GetToken.Request, Types.AuthApi.CommonResponse> = async (alifAuthHttp, payload) => {
  const extendedPayload = { ...payload, grant_type: "password" };
  return alifAuthHttp.post("/merchants/protocol/openid-connect/token", extendedPayload, { headers: tokenHeaders });
};

export const RefreshToken: CallerPayload<Types.AuthApi.RefreshToken.Request, Types.AuthApi.CommonResponse> = async (alifAuthHttp, payload) => {
  const extendedPayload = { ...payload, grant_type: "refresh_token" };
  return alifAuthHttp.post("/merchants/protocol/openid-connect/token", extendedPayload, { headers: tokenHeaders });
};

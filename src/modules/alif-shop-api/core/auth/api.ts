import { CallerPayload, UsernamePasswordParams } from "@/common";

import * as Types from "./types";

export const GetToken: CallerPayload<UsernamePasswordParams, Types.IAuth.GetToken.Response> = async (alifHttp, payload) => {
  const body = { username: payload.username, password: payload.password, client_id: "merchant-frontend", grant_type: "password" };
  return alifHttp.post("/merchants/protocol/openid-connect/token", body, { headers: { "content-type": "application/x-www-form-urlencoded" } });
};

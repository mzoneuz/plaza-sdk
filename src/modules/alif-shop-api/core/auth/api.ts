import { CallerPayload } from "@/common";

import * as Types from "./types";

export const GetToken: CallerPayload<Types.IAuth.GetToken.Request, Types.IAuth.GetToken.Response> = async (alifAuthHttp, payload) => {
  return alifAuthHttp.post("/merchants/protocol/openid-connect/token", payload, { headers: { "content-type": "application/x-www-form-urlencoded" } });
};

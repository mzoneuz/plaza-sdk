import { CallerParam } from "@/common";

import * as Types from "./types";
import * as Params from "./params";

const headers = { "content-type": "application/x-www-form-urlencoded", authorization: `Basic YjJiLWZyb250OmNsaWVudFNlY3JldA==` };

export const GetToken: CallerParam<Params.UsernamePassword, Types.AuthApi.GetToken.Response> = async (uzumHttp, params) => {
  return uzumHttp.post("/oauth/token", { grant_type: "password", username: params.username, password: params.password, referer: "" }, { headers });
};

export const CheckToken: CallerParam<string, Types.AuthApi.CheckToken.Response> = async (uzumHttp, token: string) => {
  return uzumHttp.post("/auth/seller/check_token", { token }, { headers });
};

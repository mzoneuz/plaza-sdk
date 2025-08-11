import { CallerParam } from "@/common";

import * as Types from "./types";
import { TokenParams } from "./params";

const headers = { "content-type": "application/x-www-form-urlencoded", authorization: `Basic YjJiLWZyb250OmNsaWVudFNlY3JldA==` };

export const GetToken: CallerParam<TokenParams, Types.AuthApi.GetToken.Response> = async (uzumHttp, params) => {
  return uzumHttp.post(
    "/oauth/token",
    { grant_type: params.grant_type || "password", refresh_token: params.refresh_token, username: params.username, password: params.password, referer: "" },
    { headers },
  );
};

export const CheckToken: CallerParam<string, Types.AuthApi.CheckToken.Response> = async (uzumHttp, token: string) => {
  return uzumHttp.post("/auth/seller/check_token", { token }, { headers });
};

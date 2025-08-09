import { UsernamePasswordParams } from "@/common";

export declare namespace IAuth {
  export namespace GetToken {
    export interface Request extends UsernamePasswordParams {
      client_id: "merchant-frontend" | (string & {});
      grant_type: "password" | "refresh_token" | (string & {});
    }

    export interface Response {
      access_token: string;
      expires_in: number;
      refresh_expires_in: number;
      refresh_token: string;
      token_type: "Bearer" | (string & {});
      "not-before-policy": number;
      session_state: string;
      scope: string;
    }
  }
}

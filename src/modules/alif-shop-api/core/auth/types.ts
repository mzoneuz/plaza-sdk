import { UsernamePasswordParams } from "@/common";

export declare namespace AuthApi {
  export interface CommonResponse {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: "Bearer" | (string & {});
    "not-before-policy": number;
    session_state: string;
    scope: string;
  }

  export namespace GetToken {
    export interface Request extends UsernamePasswordParams {
      client_id: "merchant-frontend" | (string & {});
    }
  }

  export namespace RefreshToken {
    export interface Request {
      client_id: "merchant-frontend" | (string & {});
      refresh_token: string;
    }
  }
}

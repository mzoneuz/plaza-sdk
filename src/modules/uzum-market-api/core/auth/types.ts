import { AUTHORITIES } from "./enums";

export declare namespace AuthEntity {
  export type Authority = keyof typeof AUTHORITIES;

  export interface User {
    user_name: string;
    uzumCustomerId: string;
    active: boolean;
    locale: string;
    authorities: AuthEntity.Authority[];
    client_id: string;
    segments: string[];
    firstName: string;
    accountId: number;
    phoneNumber: string;
    sellerId: number;
    permissions: Record<string, number[]>;
    scope: string[];
    customerId: number;
    registrationDate: string;
    organizations: Record<string, { role: string; permissions: string[] }>;
    banned: boolean;
    exp: number;
    email: string;
  }
}

export declare namespace AuthApi {
  export namespace GetToken {
    export interface Response {
      access_token: string;
      token_type: "bearer";
      refresh_token: string;
      expires_in: number;
      scope: string;
    }
  }

  export namespace CheckToken {
    export type Response = AuthEntity.User;
  }
}

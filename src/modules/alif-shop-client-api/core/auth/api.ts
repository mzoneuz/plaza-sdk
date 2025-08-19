import { CallerPayload } from "@/common";

export const RequestLogin: CallerPayload<{ phone: string }> = (http, payload) => {
  return http.post("/auth/request-login", payload, { headers: { "accept-language": "uz", "service-token": "service-token-alifshop" } });
};

export const Login: CallerPayload<{ name?: string; otp: string; phone: string; remember_me: boolean }> = (http, payload) => {
  const { name = "", ...restPayload } = payload;
  return http.post("/auth/login", { name, ...restPayload }, { headers: { "accept-language": "uz", "service-token": "service-token-alifshop" } });
};

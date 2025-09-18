import { uzumOrderStatuses } from "./constants";

export type ProductStatuses = "READY_TO_SEND" | "ARCHIVED" | "IN_STOCK" | "RUN_OUT" | (string & {});

export type OrderStatuses = (typeof uzumOrderStatuses)[number] | (string & {});

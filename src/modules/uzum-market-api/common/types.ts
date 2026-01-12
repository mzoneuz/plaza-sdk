import { uzumOrderStatuses } from "./constants";

export type ProductStatuses = "READY_TO_SEND" | "ARCHIVED" | "IN_STOCK" | "RUN_OUT" | (string & {});

export type OrderStatuses = (typeof uzumOrderStatuses)[number] | (string & {});

export type ReturnTypes = "FBS" | "DEFECTED" | "RETURN";

export type ReturnStatuses = "CREATED" | "SENT" | "IN_PROGRESS" | "MOVED_TO_DELIVERY" | "ASSEMBLED" | "COMPLETED" | "UTILIZED" | "CANCELED";
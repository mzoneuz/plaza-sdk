import { NumberNullable } from "@/common/types";
import { IMultiLang } from "@/common/interfaces";

import { ProductStatuses } from "./types";

export interface StatusValue {
  value: string;
  title: string;
  color: string;
}

export interface PromotionSku {
  skuId: number;
  newPrice: number;
}

export interface Status {
  id: number;
  title: string;
  value: ProductStatuses;
  description: string;
  color: string;
  additional: unknown[];
}

export interface Dimensions {
  length: NumberNullable;
  width: NumberNullable;
  height: NumberNullable;
  weight: NumberNullable;
}

export interface RankInfo {
  rank: string;
  rankValue: string;
  dateUpdated: number;
}

export interface SkuCharacteristic {
  characteristicTitle: IMultiLang;
  definedType: boolean;
  characteristicValue: IMultiLang;
}

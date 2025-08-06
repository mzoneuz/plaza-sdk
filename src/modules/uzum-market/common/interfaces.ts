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

export interface CommissionDto {
  minCommission: number;
  maxCommission: number;
}

export interface CharacteristicValue {
  title: IMultiLang;
  value: string;
  skuValue: string;
  wantToPhotoStudio: boolean | null;
}

export interface DefinedCharacteristic {
  orderingNumber: number;
  characteristicValues: CharacteristicValue[];
  characteristicTitle: IMultiLang;
  characteristicId: number | null;
  defined: boolean;
  requiredType?: string;
}

export interface FilterValue {
  id: number;
  value: string;
  title: string;
  predefined: boolean;
  isApproved: boolean | null;
}

export interface Filter {
  id: number;
  title: string;
  description: string | null;
  extendableValues: boolean;
  required: boolean;
  values: FilterValue[];
  emptyValue: FilterValue;
  maxLength: number | null;
  brandFilter: boolean;
}

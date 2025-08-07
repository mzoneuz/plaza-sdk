import { BooleanNullable, NumberNullable, StringNullable } from "@/common/types";
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

export interface Commission {
  minCommission: number;
  maxCommission: number;
}

export interface CharacteristicValue {
  title: IMultiLang;
  value: string;
  skuValue: string;
  wantToPhotoStudio: BooleanNullable;
}

export interface DefinedCharacteristic {
  orderingNumber: number;
  characteristicValues: CharacteristicValue[];
  characteristicTitle: IMultiLang;
  characteristicId: NumberNullable;
  defined: boolean;
  requiredType?: string;
}

export interface FilterValue {
  id: number;
  value: string;
  title: string;
  predefined: boolean;
  isApproved: BooleanNullable;
}

export interface Filter {
  id: number;
  title: string;
  description: StringNullable;
  extendableValues: boolean;
  required: boolean;
  values: FilterValue[];
  emptyValue: FilterValue;
  maxLength: NumberNullable;
  brandFilter: boolean;
}

export interface ColorImage {
  colorImage: string;
  imageUrl: string;
  ordering: number;
  deletable: boolean;
  color: IMultiLang;
  status: string;
}

export interface Comment {
  comment: IMultiLang;
  commentType: string;
}

export interface ProductFilterValue {
  filterId: number;
  filterValueId: number;
}

export interface ProductMedia {
  deletable: boolean;
  url: string;
  key: string;
  status: string;
}

export interface DimensionalGroup {
  group: string;
  title: string;
}

export interface Category {
  id: number;
  title: string;
  productAmount: number;
  parent: Category | null;
}

export interface RatingInfo {
  rating: string;
  feedbackQuantity: string;
}

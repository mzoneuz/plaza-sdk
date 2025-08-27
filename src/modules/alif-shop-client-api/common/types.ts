import { IMultiLang } from "@/common";

export interface PartnerBySlug {
  id: number;
  slug: string;
}

export interface PartnerByName {
  id: number;
  slug: string;
}
export interface MediaItem {
  order: number;
  sm_path: string;
}

export interface AlifBrand {
  id: number;
  name: string;
  slug: string;
}

export interface TitleMedia {
  sm_path: string;
}

export interface ModereatedCardGroupItem {
  id: number;
  name: string;
  names: IMultiLang;
  attributes: ModeratedAttributeItem[];
}

export interface TermItem {
  doc_count: number;
  key: string;
}

export interface AttributeItem {
  doc_count: number;
  key: string;
  values: TermItem[];
}

export interface ModeratedAttributeItem extends AttributeItem {
  names: IMultiLang;
}

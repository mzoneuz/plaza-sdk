import { IMultiLang, NumberNullable, StringNullable } from "@/common";
import { AlifBrand, MediaItem, ModereatedCardGroupItem, PartnerByName, PartnerBySlug, TitleMedia } from "../common/interfaces";

export declare namespace AlifShopClientApiEntity {
  export interface CardThirdCategory extends CardCategory {
    sub_category: CardSubCategory;
  }

  export interface CardCategory {
    slug: string | null;
    name: string;
    name_uz: string | null;
    image?: unknown | null;
    is_active: boolean;
  }

  export interface CardSubCategory extends CardCategory {
    category: CardCategory;
  }

  export interface EventItem {
    id: string;
    slug: string;
    status: string;
    conditions: AlifShopClientApiEntity.ConditionItem[];
  }

  export interface AttributeValue {
    id: number;
    value: string;
  }

  export interface CardAttributeItem {
    id: number;
    name: string;
    values: AttributeValue[];
  }

  export interface CardGroupItem {
    id: number;
    name: string;
    attributes: CardAttributeItem[];
  }

  export interface DeliveryItem {
    id: number;
    partner_id: number;
    amount: number;
    note: string;
    note_uz: string;
    is_active: boolean;
  }

  export interface CardMedia {
    id: number;
    order: number;
    lg_path: string;
    md_path: string;
    sm_path: string;
  }

  export interface ConditionCore {
    id: number;
    duration: number;
    commission: number;
    prepayment: number;
    event_id: number | null;
  }

  export interface ConditionItem extends ConditionCore {
    event_id: number | null;
    event_id_v2: unknown | null;
    merchant_condition_id: number;
    partner_id: number;
    event_label?: null;
    event_label_uz?: null;
    is_active?: boolean;
    event_v2_id?: null;
  }

  export interface PartnerInfo extends PartnerBySlug {
    name: string;
    is_active: boolean;
    has_delivery: boolean;
    delivery_amount: number;
    cash_sales: boolean;
    has_credit: boolean;
    information: unknown | null;
    information_uz: unknown | null;
    is_official_reseller: boolean;
    is_recommend: boolean;
    logo_path: string | null;
    rating: number;
    active_deliveries: DeliveryItem[];
    conditions: ConditionItem[];
    min_application_price: number;
  }

  export interface ModeratedCategory {
    id: number;
    parent_id: number;
    parent: ModeratedCategory | null;
    name: string;
    name_uz: string;
    slug: string;
    is_active: boolean;
    order: number;
    icon: unknown | null;
    image: string;
    description_ru: unknown | null;
    description_uz: unknown | null;
    meta_title_uz: unknown | null;
    meta_title_ru: string;
    meta_description_ru: string;
    meta_description_uz: unknown | null;
    mobile_image_ru: string;
    mobile_image_uz: string;
    label: string | null;
    search_priority: number;
  }

  export interface SingleOffer {
    id: number;
    name: string;
    title_name: string;
    slug: string;
    quantity: number;
    is_available: boolean;
    price: number;
    raw_old_price: number;
    old_price: number;
    discount: number;
    has_guarantee: boolean;
    has_imei: boolean;
    in_fulfillment_center: boolean;
    rating: unknown | null;
    review_count: unknown | null;
    bnpl_details: unknown | null;
    purchase_restrictions: unknown | null;
    partner: PartnerInfo;
    product: {
      id: number;
      name: string;
      brand: AlifBrand;
      title_image: TitleMedia;
      videos: unknown | null;
      third_category: CardThirdCategory;
      images: CardMedia[];
      groups: CardGroupItem[];
    };
    condition: ConditionItem;
    label: {
      id: number;
      text_ru: string;
      text_uz: string;
    };
    events: EventItem[];
  }

  export interface SingleModeratedOffer {
    id: string;
    name: string;
    slug: string;
    price: number;
    raw_old_price: number;
    old_price: number;
    discount: number;
    is_visible: boolean;
    is_available: boolean;
    quantity: number;
    has_guarantee: boolean;
    has_imei: boolean;
    in_fulfillment_center: boolean;
    rating: unknown | null;
    review_count: unknown | null;
    path: unknown | null;
    event_label: unknown | null;
    event_label_uz: unknown | null;
    model: AlifBrand;
    series: unknown | null;
    brand: AlifBrand;
    category: ModeratedCategory;
    groups: ModereatedCardGroupItem[];
    images: string[];
    title_image: string;
    video_links: unknown | null;
    descriptions: IMultiLang;
    partner: PartnerInfo;
    events: unknown[];
    label: unknown | null;
    title_name: null;
    condition: Required<AlifShopClientApiEntity.ConditionItem>;
    purchase_restrictions: null;
    variations: null;
  }

    export interface AlifProduct {
      id: number;
      slug: string;
      product_id: number;
      moderated_offer_id?: number;
      brand_id: number;
      brand_name: string;
      brand_image: string;
      price: number;
      old_price: number;
      discount: number | null;
      label_ru: string | null;
      label_uz: string | null;
      quantity: number;
      condition: ConditionCore;
      partner: PartnerBySlug;
      product: {
        name: string;
        title_image: TitleMedia;
        images: MediaItem[];
      };
      has_imei: boolean;
      has_guarantee: boolean;
    }

  export interface CategoryOfferItem {
    offer_id: number;
    moderated_offer_id: StringNullable;
    product_id: number;
    slug: string;
    name: string;
    price: number;
    quantity: number;
    raw_old_price: number;
    old_price: NumberNullable;
    image_path: string;
    has_video_links: boolean;
    label: unknown | null;
    discount: NumberNullable;
    partner: PartnerByName;
    condition: Omit<ConditionCore, "event_id">;
    bnpl_details: unknown | null;
    purchase_restrictions: unknown | null;
  }
}

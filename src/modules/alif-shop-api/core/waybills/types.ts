import { IMetaWithTotalLast } from "@/modules/alif-shop-api/common/interfaces";

export declare namespace WaybillsEntity {
  export type WaybillType = "shipment" | "writeOff";
  export type WaybillStatus = "new" | "completed" | "missed" | "canceled";

  export interface Waybill {
    id: string;
    type: WaybillType;
    number: string;
    status: WaybillStatus;
    booked_date: string;
    items_count: number;
    waybill_file_path: string;
  }

  export interface ShipmentItem {
    offer_id: string;
    title: string;
    barcode: string;
    declared_quantity: number;
    received_quantity: number;
  }

  export interface Shipment {
    id: string;
    status: WaybillStatus;
    number: number;
    booked_date: string;
    acceptance_and_transfer_act_file_path: string;
    items: ShipmentItem[];
  }

  export type WaybillMeta = Omit<IMetaWithTotalLast, "path">;
}

export declare namespace WaybillsApi {
  export namespace List {
    export interface Response {
      data: WaybillsEntity.Waybill[];
      meta: WaybillsEntity.WaybillMeta;
    }
  }

  export namespace Single {
    export interface Response {
      data: WaybillsEntity.Shipment;
    }
  }
}

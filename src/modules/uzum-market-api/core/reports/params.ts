import { TokenParams } from "@/common";

import * as Types from "./types";

export interface GetDocumentsParams extends TokenParams {
  jobFilter?: Types.ReportsEntity.EvenJobType | (string & {});
  shopIds?: string;
  page?: number;
  size?: number;
}

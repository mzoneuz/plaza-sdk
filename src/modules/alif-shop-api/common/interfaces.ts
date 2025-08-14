export interface IMeta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
}

export interface ILinks {
  first: string;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface IMetaLink {
  url: string;
  label: string;
  active: boolean;
}

export interface IMetaWithPagination extends IMeta {
  total: number;
  last_page: number;
  links: IMetaLink[];
}

export interface IPaginatedResponse<T> {
  data: T;
  meta: IMeta;
  links: ILinks;
}

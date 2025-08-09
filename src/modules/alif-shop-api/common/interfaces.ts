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

export interface IPaginatedResponse<T> {
  data: T;
  meta: IMeta;
  links: ILinks;
}

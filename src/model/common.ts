export interface PaginationParams {
  _page: number;
  _limit: number;
  _totalRows: number;
}

export interface ListRes<T> {
  data: T[];
  pagination: PaginationParams;
}

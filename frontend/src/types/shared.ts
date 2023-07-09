export interface ICoreEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface IInfiniteScrollingInput {
  pageParam: number;
}

export interface IInfiniteScrollingOutput<T> {
  datas: T;
  isLastPage: boolean;
}

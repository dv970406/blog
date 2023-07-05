export class InfiniteScrollingInput {
  pageParam: string;
}

export class InfiniteScrollingOutput<T> {
  datas: T;
  isLastPage: boolean;
}

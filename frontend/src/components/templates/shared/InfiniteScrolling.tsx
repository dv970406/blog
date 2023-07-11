import Loader from "@/components/atomics/Loader";
import NoDataNotification from "@/components/molecules/notifications/NoDataNotification";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import React, { useCallback, useEffect, useRef } from "react";

interface IInfiniteScrolling {
  children: React.ReactNode;
  hasNextPage?: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<any, unknown>>;
  dataType: string;
  isLoading?: boolean;
  isEmptyData: boolean;
}

// 스크롤이 바닥에 닿았는지 감지하여 데이터를 더 fetching할지 결정하는 로직
const InfiniteScrolling = ({
  children,
  fetchNextPage,
  hasNextPage,
  dataType,
  isLoading = false,
  isEmptyData = false,
}: IInfiniteScrolling) => {
  const observeElement = useRef<HTMLDivElement>(null);

  const handleObserver: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observeElement.current!;
    const option = { threshold: 0.25 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <>
      <>{children}</>
      <div className="flex justify-center w-full">
        {isLoading ? <Loader /> : isEmptyData && <NoDataNotification />}
      </div>
      <div ref={observeElement} />
    </>
  );
};

export default InfiniteScrolling;

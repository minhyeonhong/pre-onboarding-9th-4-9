import _ from 'lodash';
import { useEffect, useState } from 'react';

import {
  ONE_PAGE_ITEM_LENGTH,
  TMockData,
  TPagingItems,
} from '../types/mockDataTypes';
import { useSearchParams } from 'react-router-dom';

const useFilter = (toDayMockData: TMockData[] = [], isLoading: boolean) => {
  const [orders, setOrders] = useState<any>([]);
  const [pagingItems, setPaingItems] = useState<TPagingItems>({
    pages: [],
    totalPageCount: 0,
  });
  const [params, setParams] = useSearchParams();
  const currentPageNumber = Number(params.get('currentPageNumber') || 1);


  const getPageData = (data: TMockData[] = []): TMockData[] => {
    return data.filter(
      (item: TMockData, index: number) =>
        index >= (currentPageNumber - 1) * ONE_PAGE_ITEM_LENGTH &&
        index < currentPageNumber * ONE_PAGE_ITEM_LENGTH
    );
  };

  const getPaging = (filteringData: TMockData[] = []): TPagingItems => {
    const dividePages = filteringData.length / ONE_PAGE_ITEM_LENGTH;

    const totalPageCount = Number.isInteger(dividePages)
      ? dividePages
      : Math.trunc(dividePages) + 1;

    const pages: number[] = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(i);
    }

    return { pages, totalPageCount };
  };

  useEffect(() => {
    if (!params.get('currentPageNumber')) {
      params.set('currentPageNumber', '1');
    }
    params.set('sortKey', 'id');
    params.set('sortValue', 'asc');
    params.set('status', 'all');
    params.set('customer_name', '');
    setParams(params);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setOrders(getPageData(toDayMockData));
    setPaingItems(getPaging(toDayMockData));
  }, [toDayMockData]);

  useEffect(() => {
    const filteringData =
      params.get('status') === 'all'
        ? toDayMockData.filter((toDayItem: TMockData) =>
          toDayItem.customer_name
            .toUpperCase()
            .includes((params.get('customer_name') || '').toUpperCase())
        )
        : toDayMockData
          .filter(
            (toDayItem: TMockData) =>
              toDayItem.status.toString() === params.get('status')
          )
          .filter((statusItem: TMockData) =>
            statusItem.customer_name
              .toUpperCase()
              .includes((params.get('customer_name') || '').toUpperCase())
          );

    setPaingItems(getPaging(filteringData));

    const pageData =
      filteringData.length < ONE_PAGE_ITEM_LENGTH
        ? filteringData
        : getPageData(filteringData);

    const orderDatas = _.orderBy(
      pageData,
      [(params.get('sortKey') || 'id')],
      [(params.get('sortValue') === 'desc' ? 'desc' : 'asc')]
    );

    setOrders(orderDatas);
  }, [params]);

  return [orders, pagingItems];
};

export default useFilter;

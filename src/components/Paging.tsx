import { useState } from 'react';
import styled from 'styled-components';

import { PAGE_LENGTH } from '../types/mockDataTypes';
import Button from './Button';
import { useSearchParams } from 'react-router-dom';

interface IPagingProps {
  pages: number[];
  totalPageCount: number;
}

const Paging = ({
  pages = [],
  totalPageCount = 0,
}: IPagingProps) => {
  const [pageLength, setPageLength] = useState<number>(PAGE_LENGTH);

  const [params, setParams] = useSearchParams();

  const currentPageNumber = Number(params.get('currentPageNumber') || 1);

  return (
    <StPageBtnWrap>
      {currentPageNumber > 1 && (
        <Button
          text='<'
          onClick={() => {
            setPageLength(pageLength - 1);
            params.set('currentPageNumber', (currentPageNumber - 1).toString());
            setParams(params);
          }}
        />
      )}
      {
        pages
          .filter(
            (page: number, idx: number) =>
              idx >= (currentPageNumber - 1) && idx < (currentPageNumber - 1) + PAGE_LENGTH
          )
          .map((page: number) => (
            <Button
              key={page}
              text={page}
              onClick={() => {
                params.set('currentPageNumber', page.toString());
                setParams(params);
              }}
              isOn={currentPageNumber === page}
            />
          ))
      }
      {totalPageCount - currentPageNumber >= PAGE_LENGTH && (
        <Button
          text='>'
          onClick={() => {
            setPageLength(pageLength + 1);
            params.set('currentPageNumber', (currentPageNumber + 1).toString());
            setParams(params);
          }}
        />
      )}
    </StPageBtnWrap>
  );
};

export default Paging;

const StPageBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

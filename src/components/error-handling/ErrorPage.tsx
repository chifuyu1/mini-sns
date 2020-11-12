import React from 'react';
import styled from 'styled-components';
import media from '../../util/mediaQuery';

type ErrorPageProps = {
  location: any;
};

const ErrorPageContainer = styled.div`
  display: flex;
  flex: 1;
  /* margin: 0 auto; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  ${media.medium} {
    font-size: 21px;
  }
  ${media.small} {
    font-size: 16px;
  }
`;

function ErrorPage({ location }: ErrorPageProps) {
  return (
    <ErrorPageContainer>
      <p>404 ERROR</p>
      <p>페이지 경로를 다시 확인하세요!</p>
      <p>{location.pathname}</p>
    </ErrorPageContainer>
  );
}

export default React.memo(ErrorPage);

import React from 'react';
import styled from 'styled-components';

const PostSummaryContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 10px 0 0;
  padding: 10px 12px;
  /* overflow-y: scroll; */
  overflow-y: hidden;
  word-break: break-all;
  flex-direction: column;

  img {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Box = styled.div`
  min-width: 100%;
  p {
    margin: 0;
    padding: 0;
  }
`;

type PostSummaryProps = {
  content: string;
};

function PostSummary({ content }: PostSummaryProps) {
  const InsertText = (text: string) => {
    return { __html: text };
  };
  return (
    <PostSummaryContainer>
      <Box dangerouslySetInnerHTML={InsertText(content)} />
    </PostSummaryContainer>
  );
}

export default React.memo(PostSummary);

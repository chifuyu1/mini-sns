import React from 'react';
import styled from 'styled-components';
import { PostTitleStyle } from '../../util/CommonStyle';

const PostTitling = styled.h2`
  ${PostTitleStyle};
  flex: 0 0 auto;
`;

type PostTitleItemProps = {
  title: string;
};

function PostTitleItem({ title }: PostTitleItemProps) {
  return <PostTitling>{title}</PostTitling>;
}

export default React.memo(PostTitleItem);

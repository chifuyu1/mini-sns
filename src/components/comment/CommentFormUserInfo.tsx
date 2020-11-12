import React from 'react';
import styled from 'styled-components';
import {
  UserProfilePhotoStyle,
  PostCommentUsername,
} from '../../util/CommonStyle';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { baseUrl } from '../../config/config';

const CommentUser = styled.div`
  display: flex;
  width: 200px;
`;

const CommentUserPhoto = styled.a<{ url: string }>`
  ${UserProfilePhotoStyle()}
  background-image: ${(props) =>
    props.url ? `url(${baseUrl}/${props.url})` : 'none'};
  cursor: initial;
`;

const CommentUsername = styled.div`
  ${PostCommentUsername(16)};
`;

type CommentUserInfoProps = {
  id: number;
  username: string;
};

function CommentFormUserInfo({ id, username }: CommentUserInfoProps) {
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const profileImage = userState?.ProfileImage?.src;

  return (
    <CommentUser>
      <CommentUserPhoto url={profileImage}>
        {profileImage ? <></> : <FaUserAlt />}
      </CommentUserPhoto>
      <CommentUsername>{username}</CommentUsername>
    </CommentUser>
  );
}

export default React.memo(CommentFormUserInfo);

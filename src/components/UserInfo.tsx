import React from 'react';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import {
  UserProfilePhotoStyle,
  PostCommentUsername,
} from '../util/CommonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer';
import { baseUrl } from '../config/config';

const UserProfilePhoto = styled.div<{ url: string }>`
  ${UserProfilePhotoStyle()};
  background-image: ${(props) =>
    props.url ? `url(${baseUrl}/${props.url})` : 'none'};
`;

const PostWriter = styled.div`
  ${PostCommentUsername()};
`;

const UserInfoContainer = styled.button`
  display: flex;
  outline: none;
  border: none;
  align-items: center;
  box-sizing: border-box;
  width: 150px;
  cursor: pointer;
  background: transparent;
  padding: 0;
  outline: 0;
`;

type UserInfoProps = {
  onClick: () => void;
  username: string;
  id: number;
};

function UserInfo({ id, onClick, username }: UserInfoProps) {
  const postState = useSelector((state: RootState) => state.post.userPost);
  const userImage = postState.find((info) => info.id === id)?.User?.ProfileImage
    ?.src;

  return (
    <UserInfoContainer onClick={onClick}>
      <UserProfilePhoto url={userImage}>
        {userImage ? '' : <FaUserAlt />}
        {/* {<FaUserAlt />} */}
      </UserProfilePhoto>
      <PostWriter>{username}</PostWriter>
    </UserInfoContainer>
  );
}

export default React.memo(UserInfo);

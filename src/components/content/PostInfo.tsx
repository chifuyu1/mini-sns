import React, { useCallback, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/index';
import PostSharingWindow from './PostSharingWindow';
import {
  MdShare,
  // MdNotifications,
  // MdNotificationsActive,
} from 'react-icons/md';
import { TiHeartFullOutline } from 'react-icons/ti';
import { FaComment } from 'react-icons/fa';
import { FiThumbsUp } from 'react-icons/fi';
import { PostLink } from '../../util/CommonStyle';
import { addLikeRequest, removeLikeRequest } from '../../reducer/user';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';

const PostInfoContainer = styled.div`
  margin: 0;
  margin-top: 4px;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &::after {
    clear: both;
    display: block;
    content: '';
  }
`;

const PostButton = styled.button`
  ${PostLink};
  font-size: 16px;
  & svg {
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: #ff8787;
  }
  & + & {
    margin-left: 10px;
  }
`;

// const PostAlert = styled.button<{ alertState: boolean }>`
//   ${PostLink};
//   border-radius: 50%;
//   font-size: 21px;
//   color: rgba(63, 63, 63, 0.9);
//   button + & {
//     margin-left: 5px;
//     margin-right: 5px;
//   }
//   ${(props) =>
//     props.alertState &&
//     css`
//       color: #ff8787;
//     `}
// `;

const shareStyle: CSSProperties = {
  position: 'relative',
};

type PostInfoProps = {
  id: number;
  fold: boolean;
  onFold: () => void;
};

function PostInfo({ id, fold, onFold }: PostInfoProps) {
  const [sharing, setSharing] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const postState = useSelector((state: RootState) => state.post.userPost);

  const onLike = useCallback(() => {
    if (userState) {
      if (userState?.Likes.map((info: any) => info.id).includes(id)) {
        dispatch(removeLikeRequest({ UserId: userState.id, PostId: id }));
        return;
      } else {
        dispatch(addLikeRequest({ UserId: userState.id, PostId: id }));
        return;
      }
    } else {
      alert('로그인이 필요합니다!');
      return;
    }
  }, [dispatch, userState, id]);

  const onSharingToggle = useCallback(() => {
    setSharing(!sharing);
  }, [sharing]);

  const post = postState.find((info) => info.id === id);
  let count = (post && post.Comments && post.Comments.length) || 0;
  let likeCount = post?.Likes.length;
  return (
    <>
      <PostInfoContainer>
        <PostButton onClick={onLike}>
          {userState?.Likes.map((info: any) => info.id).includes(id) ? <TiHeartFullOutline /> : <FiThumbsUp />}
          &nbsp;{likeCount}&nbsp;
        </PostButton>
        <PostButton onClick={onFold}>
          {count === 0 ? <></> : fold ? <BiCaretDown /> : <BiCaretUp />}
          <FaComment />
          &nbsp;{count}
        </PostButton>
        <PostButton style={shareStyle}>
          <MdShare onClick={onSharingToggle} />
          <PostSharingWindow sharing={sharing} />
        </PostButton>
      </PostInfoContainer>
    </>
  );
}

export default React.memo(PostInfo);

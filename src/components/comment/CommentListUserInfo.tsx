import React, { useCallback } from 'react';
import styled from 'styled-components';
import { UserProfilePhotoStyle, PostCommentUsername, DatetimeStyle, InputVirtualEvent } from '../../util/CommonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { removeCommentRequest, updateCommentClicked } from '../../reducer/post';
import { MdModeEdit } from 'react-icons/md';
import { BiX } from 'react-icons/bi';
import { baseUrl } from '../../config/config';
import { FaUserAlt } from 'react-icons/fa';

const CommentUser = styled.div`
  display: flex;
  width: 200px;
`;

const CommentUserPhoto = styled.a<{ url: string }>`
  ${UserProfilePhotoStyle()}
  background-image: ${(props) => (props.url ? `url(${baseUrl}/${props.url})` : 'none')};
  cursor: initial;
`;

const CommentUsername = styled.div`
  ${PostCommentUsername(16)};
`;

const CommentDate = styled.div`
  ${DatetimeStyle};
  flex: 1;
  justify-content: flex-end;
`;

const CommentUpdate = styled.button<{ darkmode: boolean }>`
  ${(props) => InputVirtualEvent(props.darkmode)};
  cursor: pointer;
  margin-right: 5px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type CommentListUserInfoProps = {
  id: number;
  username: string;
  writeDate: string;
  PostId: number;
};

function CommentListUserInfo({ id, PostId, username, writeDate }: CommentListUserInfoProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const postState = useSelector((state: RootState) => state.post.userPost);

  const dispatch = useDispatch();

  const onUpdate = useCallback(() => {
    dispatch(updateCommentClicked(id));
  }, [dispatch, id]);
  const onRemove = useCallback(() => {
    dispatch(removeCommentRequest({ id, PostId }));
  }, [dispatch, id, PostId]);

  const date = writeDate.split(/\s/);
  const post = postState.find((info) => info.id === PostId);
  const userImage = post?.Comments.find((info: any) => info?.User.username === username)?.ProfileImage?.src;

  return (
    <>
      <CommentUser>
        <CommentUserPhoto url={userImage}>{userImage ? <></> : <FaUserAlt />}</CommentUserPhoto>
        <CommentUsername>{username}</CommentUsername>
      </CommentUser>
      <CommentDate>
        {userState?.username === username ? (
          <>
            <CommentUpdate darkmode={darkmode} type='button' onClick={onUpdate}>
              <MdModeEdit />
            </CommentUpdate>
            <CommentUpdate darkmode={darkmode} type='button' onClick={onRemove}>
              <BiX />
            </CommentUpdate>
          </>
        ) : (
          <></>
        )}
        {/* {writeDate} */}
        {date[0]}
        <br />
        {date[1]}
        {/* {year}.{month}.{date}&nbsp;
        {day}
        <br />
        {hour}:{min}:{sec} */}
      </CommentDate>
    </>
  );
}

export default React.memo(CommentListUserInfo);

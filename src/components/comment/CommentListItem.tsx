import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducer';
import { updateCommentClicked, updateCommentRequest } from '../../reducer/post';
import CommentListUserInfo from './CommentListUserInfo';
import { CommentFormStyle, CommentWrite, CommentWriteInput } from './styles';

const CommentTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CommentListItemContainer = styled.li`
  list-style: none;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const CommentContent = styled.p`
  padding: 0 12px;
  font-size: 12px;
  overflow-wrap: break-word;
  margin-top: 10px;
`;

type CommentListItemProps = {
  id: number;
  username: string;
  content: string;
  writeDate: string;
  PostId: number;
};

function CommentListItem({
  id,
  username,
  content,
  writeDate,
  PostId,
}: CommentListItemProps) {
  const [update, setUpdate] = useState('');
  const dispatch = useDispatch();
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const commentUpdate = useSelector(
    (state: RootState) => state.post.updateCommentClicked,
  );
  const commentUpdateId = useSelector(
    (state: RootState) => state.post.updateCommentId,
  );
  const onUpdate = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdate(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(updateCommentRequest({ id, content: update }));
      dispatch(updateCommentClicked(id));
    },
    [dispatch, id, update],
  );

  // 여기서 받는 id는 댓글 아이디
  return (
    <>
      <CommentListItemContainer>
        <CommentTitleContainer>
          <CommentListUserInfo
            id={id}
            PostId={PostId}
            username={username}
            writeDate={writeDate}
          />
        </CommentTitleContainer>
        {commentUpdateId === id && commentUpdate ? (
          <CommentFormStyle onSubmit={onSubmit}>
            <CommentWriteInput
              darkmode={darkmode}
              placeholder="수정할 내용을 입력하세요"
              value={update}
              onChange={onUpdate}
            />
            <CommentWrite darkmode={darkmode} type="submit">
              수정
            </CommentWrite>
          </CommentFormStyle>
        ) : (
          <></>
        )}
        <CommentContent>{content}</CommentContent>
      </CommentListItemContainer>
    </>
  );
}

export default React.memo(CommentListItem);

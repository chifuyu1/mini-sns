import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducer';
import { updatePostRequest } from '../../reducer/post';
import { CommentSubmitButtonStyle } from '../../util/CommonStyle';
import theme from '../../util/theme';
import { CommentWriteInput } from '../comment/styles';
import WysiwygEditor from '../write/WysiwygEditor';

const PostUpdateContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
  .writeInput {
    height: 10px;
  }
`;

const EditButtonContainer = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 5px 5px 0;
  background: ${theme.light.box};
`;

const EditButton = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
`;

type PostUpdateProps = {
  id: number;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  updateTitle: string;
  onChangeContent: (text: string) => void;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateContent: string;
  onUpdateCancel: () => void;
};

function PostUpdate({
  id,
  setUpdate,
  updateTitle,
  onChangeContent,
  onChangeTitle,
  updateContent,
  onUpdateCancel,
}: PostUpdateProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();
  const onUpdate = useCallback(() => {
    if (window.confirm('이대로 수정할까요?')) {
      dispatch(
        updatePostRequest({ id, title: updateTitle, content: updateContent }),
      );
      setUpdate((prev) => !prev);
    } else return;
  }, [dispatch, id, updateTitle, updateContent, setUpdate]);

  return (
    <PostUpdateContainer>
      <div className={'writeInput'}></div>
      <CommentWriteInput
        darkmode={darkmode}
        value={updateTitle}
        type="text"
        onChange={onChangeTitle}
      />
      <div className={'writeInput'}></div>
      <WysiwygEditor content={updateContent} onContent={onChangeContent} />
      <EditButtonContainer>
        <EditButton darkmode={darkmode} type="button" onClick={onUpdate}>
          수정
        </EditButton>
        <EditButton darkmode={darkmode} type="button" onClick={onUpdateCancel}>
          취소
        </EditButton>
      </EditButtonContainer>
    </PostUpdateContainer>
  );
}

export default React.memo(PostUpdate);

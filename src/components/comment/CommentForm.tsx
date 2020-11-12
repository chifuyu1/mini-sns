import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer/index';
import { addCommentRequest } from '../../reducer/post';
import { CommentFormStyle, CommentWrite, CommentWriteInput } from './styles';

type CommentFormProps = {
  id: number;
};

function CommentForm({ id }: CommentFormProps) {
  const [text, setText] = useState('');
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();
  // const onCreate = useCallback(
  //   (id: number, idVal: number, text: string, getDate: writeDateType) =>
  //     dispatch(commentAdd(id, idVal, text, getDate)),
  //   [dispatch],
  // );
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  // const idCheck = useSelector((state: RootState) => state.CommentReducers);
  // const idCheckArr = idCheck.filter((list) => list.postId === id);
  // let idVal = idCheckArr.length;

  const userState = useSelector((state: RootState) => state.user.userInfo);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (text.length === 0) {
        alert('댓글의 내용을 최소 1자 이상 입력해주세요!');
        return;
      }
      // if (id === a[id - 1]) {
      // } else {
      //   alert('number가 다름!');
      // }
      // const today = new Date();

      // Today Date
      // const year = today.getFullYear();
      // const month = today.getMonth() + 1;
      // const date = today.getDate();
      // const day = today.getDay();

      // Today Time
      // const hour = today.getHours();
      // const min = today.getMinutes();
      // const sec = today.getSeconds();
      // onCreate(
      //   id,
      //   ++idVal,
      //   text,
      //   setDate(year, month, date, day, hour, min, sec),
      // );
      dispatch(
        addCommentRequest({ content: text, UserId: userState.id, PostId: id }),
      );
      setText('');
    },
    [setText, text, dispatch, id, userState],
  );

  return (
    <CommentFormStyle onSubmit={onSubmit}>
      <CommentWriteInput
        darkmode={darkmode}
        onChange={onChange}
        placeholder="댓글을 작성하세요"
        value={text}
      />
      <CommentWrite type="submit" darkmode={darkmode}>
        작성
      </CommentWrite>
    </CommentFormStyle>
  );
}

export default React.memo(CommentForm);

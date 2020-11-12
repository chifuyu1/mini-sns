import React, { useCallback, useState } from 'react';
import { RootState } from '../../reducer/index';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  WriteBtn,
  WriteContainer,
  WritedefaultTitle,
  WritePostioner,
} from './styles';
import WysiwygEditor from './WysiwygEditor';
import { addPostRequest } from '../../reducer/post';

function Write() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const writeClose = useSelector((state: RootState) => state.writeToggle.close);

  const onTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    [setTitle],
  );
  const onContent = useCallback(
    (text: string) => {
      setContent(text);
    },
    [setContent],
  );

  const pageBack = useCallback(() => {
    if (window.confirm('글 작성을 취소할까요?')) {
      history.goBack();
    }
  }, [history]);
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const onSubmit = (title: string, content: string) => {
    // event.preventDefault();
    const space = /^\s+|\s+$/g;

    if (title.length === 0) {
      alert('제목을 최소 1자 이상 입력해주세요!');
      return;
    }
    if (title.replace(space, '') === '') {
      alert('제목은 공백으로만 구성할 수 없습니다! ');
      return;
    }
    if (title.trim().length > 30) {
      alert('제목은 30자 이내로 작성해주세요!');
      return;
    }
    if (content.length === 0) {
      alert('내용을 최소 1자 이상 입력해주세요!');
      return;
    }
    // if (content.trim().length > 1500) {
    //   alert('내용은 1500자 이내로 작성해주세요!');
    //   return;
    // }
    if (content.replace(space, '') === '') {
      alert('내용은 공백으로만 구성할 수 없습니다! ');
      return;
    }
    if (window.confirm('이대로 등록할까요?')) {
      history.goBack();
      // onCreate(title, content, setDate(year, month, date, day, hour, min, sec));
      dispatch(addPostRequest({ id: userState.id, title, content }));
    }
  };

  return (
    <WritePostioner>
      <WriteContainer darkmode={darkmode} writeClose={writeClose}>
        <WritedefaultTitle>글 작성 Write</WritedefaultTitle>
        <div className="write-form">
          <input
            type="text"
            placeholder="글 제목"
            className="write-title"
            onChange={onTitle}
            autoFocus
          />
          <WysiwygEditor content={content} onContent={onContent} />
          <div className="btn-wrapper">
            <WriteBtn
              darkmode={darkmode}
              onClick={() => onSubmit(title, content)}
            >
              등록
            </WriteBtn>
            <WriteBtn type="button" onClick={pageBack} darkmode={darkmode}>
              취소
            </WriteBtn>
          </div>
        </div>
      </WriteContainer>
    </WritePostioner>
  );
}

export default React.memo(Write);

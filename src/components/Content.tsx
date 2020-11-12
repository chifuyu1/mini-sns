import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import UserProfileDetail from './UserProfileDetail';
import Comment from './comment/Comment';
import UserInfo from './UserInfo';
import CommentList from './comment/CommentList';
import PostInfo from './content/PostInfo';
import PostSummary from './content/PostSummary';
import { ContentBox, IgnoreFilter } from '../util/CommonStyle';
import PostTitleItem from '../components/content/PostTitleItem';
import media from '../util/mediaQuery';
import PostDate from './content/PostDate';
import { RootState } from '../reducer/index';
import { useSelector } from 'react-redux';
import PostUpdate from './content/PostUpdate';

const PostChunk = styled.div<{ filter: number }>`
  ${(props) => IgnoreFilter(props.filter)};
`;

const PostBackground = styled.div<{ filter: number }>`
  background: #f1f3f5;
  ${ContentBox};
  ${(props) => IgnoreFilter(props.filter)};
  ${media.medium} {
    max-width: initial;
  }
`;

const PostContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

type ContentProps = {
  id: number;
  username: string;
  title: string;
  content: string;
  date: string;
  UserId: number;
};

function Content({ id, username, title, content, date, UserId }: ContentProps) {
  const [detail, setDetail] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateContent, setUpdateContent] = useState(content);

  const onUpdate = useCallback(() => {
    if (!update) {
      setUpdate((prev) => !prev);
    }
    if (update) {
      if (
        window.confirm(
          '정말로 취소하시겠어요? 작성하던 내용은 모두 사라집니다.',
        ) === true
      ) {
        setUpdate((prev) => !prev);
        setUpdateTitle(title);
        setUpdateContent(content);
      } else return;
    }
  }, [update, title, content]);

  const onUpdateCancel = useCallback(() => {
    if (!update) {
      setUpdate((prev) => !prev);
    }
    if (update) {
      if (
        window.confirm(
          '정말로 취소하시겠어요? 작성하던 내용은 모두 사라집니다.',
        )
      ) {
        setUpdate((prev) => !prev);
        setUpdateTitle(title);
        setUpdateContent(content);
      } else return;
    }
  }, [update, title, content]);

  const onChangeTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUpdateTitle(e.target.value);
    },
    [],
  );

  const onChangeContent = useCallback((text: string) => {
    setUpdateContent(text);
  }, []);

  const onChangeUserProfile = useCallback(() => {
    setDetail(!detail);
  }, [detail]);

  const ignoreArray = useSelector((state: RootState) => state.ignore);
  const ignoreList = ignoreArray.map((list) => list.username);
  const writtenArray = useSelector((state: RootState) => state.PostAdd);
  const writtenList = writtenArray.map((list) => list.username);
  // const isList = useSelector((state: RootState) => state.CommentReducers);
  // const isListArray = isList.filter((list) => list.postId === id);
  // const isListLength = isListArray.length;

  const isIgnore = (
    ignoreUsers: string[],
    writtenUsers: string[],
    name: string,
  ) => {
    // 게시물에 차단 목록 유저가 있으면 보여주지 않음
    // 따라서 게시물 username 배열에 차단목록 username이 있는지 확인
    let a = ignoreUsers.sort();
    let b = writtenUsers.sort();
    const c = Math.max(a.length, b.length);
    let d = [];
    for (let i = 0; i < c; i++) {
      const res = a.filter((element) => element === b[i]);
      if (res) {
        d.push(res);
      }
    }
    let e = [];
    for (let i = 0; i < d.length; i++) {
      for (let j = 0; j < d[i].length; j++) {
        e.push(d[i][j]);
      }
    }
    let flag = 0;
    if (e.includes(name) === true) {
      flag = 1;
    }
    return flag;
  };
  const isLook = isIgnore(ignoreList, writtenList, username);
  const isLookError =
    id === -404 ? 1 : isIgnore(ignoreList, writtenList, username);

  return (
    <>
      <PostBackground filter={id === -404 ? 0 : isLook}>
        <PostContent>
          <PostWrapper>
            <UserInfo
              onClick={onChangeUserProfile}
              username={username}
              id={id}
            />
            <UserProfileDetail detail={detail} username={username} id={id} />
            <PostDate
              todayDate={date}
              id={id}
              UserId={UserId}
              onUpdate={onUpdate}
            />
          </PostWrapper>
          {update ? (
            <PostUpdate
              id={id}
              setUpdate={setUpdate}
              updateTitle={updateTitle}
              onChangeContent={onChangeContent}
              onChangeTitle={onChangeTitle}
              updateContent={updateContent}
              onUpdateCancel={onUpdateCancel}
            />
          ) : (
            <>
              <PostTitleItem title={title} />
              <PostSummary content={content} />
            </>
          )}
          <PostInfo id={id} />
        </PostContent>
      </PostBackground>
      <PostChunk filter={isLookError}>
        <Comment id={id} />
        <CommentList key={id} id={id} />
      </PostChunk>
    </>
  );
}

export default React.memo(Content);

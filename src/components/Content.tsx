import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import UserProfileDetail from './UserProfileDetail';
import Comment from './comment/Comment';
import UserInfo from './UserInfo';
import CommentList from './comment/CommentList';
import PostInfo from './content/PostInfo';
import PostSummary from './content/PostSummary';
import { ContentBox } from '../util/CommonStyle';
import PostTitleItem from '../components/content/PostTitleItem';
import media from '../util/mediaQuery';
import PostDate from './content/PostDate';
import PostUpdate from './content/PostUpdate';

const PostChunk = styled.div``;

const PostBackground = styled.div`
  background: #f1f3f5;
  ${ContentBox};
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
  const [fold, setFold] = useState(true);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateContent, setUpdateContent] = useState(content);

  const onUpdate = useCallback(() => {
    if (!update) {
      setUpdate((prev) => !prev);
    }
    if (update) {
      if (window.confirm('정말로 취소하시겠어요? 작성하던 내용은 모두 사라집니다.') === true) {
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
      if (window.confirm('정말로 취소하시겠어요? 작성하던 내용은 모두 사라집니다.')) {
        setUpdate((prev) => !prev);
        setUpdateTitle(title);
        setUpdateContent(content);
      } else return;
    }
  }, [update, title, content]);

  const onChangeTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback((text: string) => {
    setUpdateContent(text);
  }, []);

  const onChangeUserProfile = useCallback(() => {
    setDetail(!detail);
  }, [detail]);

  const onFold = useCallback(() => {
    setFold((prev) => !prev);
  }, []);

  return (
    <>
      <PostBackground>
        <PostContent>
          <PostWrapper>
            <UserInfo onClick={onChangeUserProfile} username={username} id={id} />
            <UserProfileDetail detail={detail} username={username} id={id} />
            <PostDate todayDate={date} id={id} UserId={UserId} onUpdate={onUpdate} />
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
          <PostInfo id={id} fold={fold} onFold={onFold} />
        </PostContent>
      </PostBackground>
      <PostChunk>
        <Comment id={id} />
        {fold ? <></> : <CommentList key={id} id={id} />}
      </PostChunk>
    </>
  );
}

export default React.memo(Content);

import React, { useEffect } from 'react';
import Content from './Content';
import styled from 'styled-components';
import LeftMenuContainer from './leftmenu/LeftMenuContainer';
import RightMenuContainer from './rightmenu/RightMenuContainer';
import Setting from './leftmenu/setSettings/Settings';
import { DisplayViewStyle } from '../util/CommonStyle';
import media from '../util/mediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducer/index';
import ErrorSearch from './error-handling/ErrorSearch';
import { blockIgnoreRequest, loadUserRequest } from '../reducer/user';
import { getPostRequest } from '../reducer/post';
import { loginClose } from './loginwindow/loginWindowReducer';

const DisplayView = styled.div`
  ${DisplayViewStyle};
  ${media.small} {
    flex-direction: column;
  }
`;

const Wrapper = styled.div<{ settingsClose: boolean }>`
  margin: 0 50px;
  display: ${(props) => (props.settingsClose ? 'block' : 'none')};
  ${media.medium} {
    margin: 0 50px;
    flex: 1;
  }
  ${media.small} {
    padding: 0;
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

function ContentContainer() {
  const dispatch = useDispatch();
  const settingsClose = useSelector(
    (state: RootState) => state.settingsToggle.close,
  );

  const userState = useSelector((state: RootState) => state.user);
  const postState = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (!userState.userInfo) {
      dispatch(loadUserRequest());
    }
  }, [dispatch, userState.userInfo]);

  useEffect(() => {
    if (!userState.userInfo && postState.userPost.length === 0) {
      dispatch(getPostRequest(0));
    }
  }, [dispatch, postState.userPost, userState.userInfo]);

  useEffect(() => {
    if (userState.userInfo?.blockIgnore) {
      dispatch(blockIgnoreRequest());
      return;
    }
  }, [dispatch, userState.userInfo?.blockIgnore]);

  useEffect(() => {
    function onScroll() {
      if (
        window.pageYOffset + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 200
      ) {
        if (postState.isMoreLoadingPosts && !postState.getPostLoading) {
          const lastId = postState.userPost[postState.userPost.length - 1]?.id;
          dispatch(getPostRequest(lastId));
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [
    dispatch,
    postState.getPostLoading,
    postState.userPost,
    postState.isMoreLoadingPosts,
  ]);

  useEffect(() => {
    dispatch(loginClose());
  }, [dispatch]);

  return (
    <>
      <DisplayView>
        <LeftMenuContainer />
        <Setting />
        <Wrapper settingsClose={settingsClose}>
          {postState.userPost.length !== 0 ? (
            postState.userPost.map((list) => (
              <Content
                key={list.id}
                id={list.id}
                UserId={list.UserId}
                username={list?.User?.username}
                title={list.title}
                content={list.content}
                date={list.createdAt}
              />
            ))
          ) : (
            <ErrorSearch />
          )}
        </Wrapper>
        <RightMenuContainer />
      </DisplayView>
    </>
  );
}

export default React.memo(ContentContainer);

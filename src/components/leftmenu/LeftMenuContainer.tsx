import React, { useCallback, useRef, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer/index';
import HomeButtonContainer from './home/HomeButtonContainer';
import FriendList from './friends/FriendList';
import FriendListContainer from './friends/FriendListContainer';
// import LeftMessageContainer from './leftmessage/LeftMessageContainer';
import SettingsOpenContainer from './setSettings/SettingsOpenContainer';
import WriteButtonContainer from '../write/WriteButtonContainer';
import IgnoreListContainer from './ignore/IgnoreListContainer';
import RightMenuContainerRes from '../rightmenu/RightMenuRes';
import { IoMdMoon } from 'react-icons/io';
import { Toggle } from '../rightmenu/DarkMode/darkmode';
import LoginButton from '../loginwindow/LoginButton';
import {
  LeftMenuListStyle,
  LeftMenuSearchBox,
  LeftMenuSearchContainer,
  LeftMenuSearchInput,
  LeftMenuWrapper,
  RightMenuView,
  Icons,
  ResetIcon,
} from './styles';
import { getPostRequest, resetTrue, searchRequest } from '../../reducer/post';

function LeftMenuContainer() {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const friend = useSelector((state: RootState) => state.friend.friend);
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const postState = useSelector((state: RootState) => state.post.userPost);
  const isReset = useSelector((state: RootState) => state.post.resetting);
  const searchInput = useRef<HTMLInputElement>(null);

  const onToggle = useCallback(() => dispatch(Toggle()), [dispatch]);
  const onReset = useCallback(() => {
    const lastId = postState[postState.length - 1]?.id;
    dispatch(resetTrue());
    dispatch(getPostRequest(lastId));
  }, [dispatch, postState]);

  const onChangeSearchWord = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  }, []);

  const onSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!searchWord || searchWord.trim().length === 0) {
        setSearchWord('');
        if (searchInput.current) {
          searchInput.current.focus();
        }
        alert('검색어를 입력해주세요!');
        return;
      } else {
        dispatch(searchRequest({ word: searchWord }));
        return;
      }
    },
    [searchWord, dispatch],
  );

  // const searchInfo_result = (word: string) =>
  //   initialState.filter(
  //     (info) =>
  //       info.username.includes(word) ||
  //       info.content.includes(word) ||
  //       info.title.includes(word),
  //   );

  // if (searchWord.trim().length === 0 || !searchWord) {
  //   setSearchWord('');
  //   dispatch(postRestore());
  //   return;
  // } else {
  //   const temp = searchInfo_result(searchWord);
  //   dispatch(postFilter(temp));
  //   if (temp.length === 0) {
  //     setTimeout(() => setSearchWord(''), 3000);
  //   }
  // }

  return (
    <LeftMenuWrapper>
      <LeftMenuSearchBox darkmode={darkmode}>
        <Icons>
          <MdSearch className='SearchIcon' />
        </Icons>
        <LeftMenuSearchContainer onSubmit={onSubmitSearch}>
          <LeftMenuSearchInput
            darkmode={darkmode}
            placeholder='검색'
            value={searchWord}
            onChange={onChangeSearchWord}
            ref={searchInput}
          />
        </LeftMenuSearchContainer>
        <ResetIcon onClick={onReset} isReset={isReset} title='게시글 새로 가져오기'>
          <GrPowerReset className='SearchIcon' />
        </ResetIcon>
        {/* <div className="resultFrame"></div> */}
      </LeftMenuSearchBox>
      <LeftMenuListStyle darkmode={darkmode} friend={friend}>
        <li>
          <LoginButton />
        </li>
        <li>
          <HomeButtonContainer />
        </li>
        {userState ? (
          <>
            <li>
              <WriteButtonContainer />
            </li>
            {/* <li>
              <LeftMessageContainer />
            </li> */}
            <li className='friends'>
              <FriendListContainer />
              <div className='friend-box'>
                <FriendList />
                <IgnoreListContainer />
              </div>
            </li>
            <li>
              <SettingsOpenContainer />
            </li>
            <li className='mobileNight'>
              <button onClick={onToggle}>
                <IoMdMoon />
              </button>
            </li>
          </>
        ) : (
          <></>
        )}
      </LeftMenuListStyle>
      <RightMenuView>
        <RightMenuContainerRes />
      </RightMenuView>
    </LeftMenuWrapper>
  );
}

export default React.memo(LeftMenuContainer);

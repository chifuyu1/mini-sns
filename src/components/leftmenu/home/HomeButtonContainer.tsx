import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import { MdHome } from 'react-icons/md';
import { AlignText } from '../../../util/CommonStyle';
import { sendClose } from '../../message/MailToggle';
import { MessageClose } from '../../message/messageReducer';
import { SettingsClose } from '../setSettings/setSettingsReducer';
import { getPostRequest } from '../../../reducer/post';
import { RootState } from '../../../reducer';

function HomeButtonContainer() {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootState) => state.post.userPost);

  let scroll = Scroll.animateScroll;

  const closePage = useCallback(() => {
    dispatch(sendClose());
    dispatch(MessageClose());
    dispatch(SettingsClose());
  }, [dispatch]);

  const scrollToTop = useCallback(() => {
    const lastId = postState[postState.length - 1]?.id;
    closePage();
    scroll.scrollTo(0);
    dispatch(getPostRequest(lastId));
  }, [scroll, postState, dispatch, closePage]);

  return (
    <button onClick={scrollToTop}>
      <MdHome />
      <AlignText>홈</AlignText>
    </button>
  );
}

export default React.memo(HomeButtonContainer);

import React from 'react';
import { useDispatch } from 'react-redux';
import * as Scroll from 'react-scroll';
import { MdHome } from 'react-icons/md';
import { AlignText } from '../../../util/CommonStyle';
import { sendClose } from '../../message/MailToggle';
import { MessageClose } from '../../message/messageReducer';
import { SettingsClose } from '../setSettings/setSettingsReducer';

function HomeButtonContainer() {
  let scroll = Scroll.animateScroll;
  const dispatch = useDispatch();
  const closePage = () => {
    dispatch(sendClose());
    dispatch(MessageClose());
    dispatch(SettingsClose());
  };

  const scrollToTop = () => {
    closePage();
    scroll.scrollTo(0);
  };

  return (
    <button onClick={scrollToTop}>
      <MdHome />
      <AlignText>홈</AlignText>
    </button>
  );
}

export default React.memo(HomeButtonContainer);

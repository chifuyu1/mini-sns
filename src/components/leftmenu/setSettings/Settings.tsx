import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducer/index';
import SettingThumbnails from './SettingThumbnails';
import { SettingsClose } from './setSettingsReducer';
import { IoIosLogOut } from 'react-icons/io';
import {
  SettingContainer,
  SettingMenuButtonList,
  SettingMenuList,
  LogOutButtonContainer,
  SettingMenuWrapper,
  SettingdefaultTitle,
  SettingsCloseBtn,
  SettingsCloseWrapper,
} from './styles';

function Setting() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const settingsClose = useSelector(
    (state: RootState) => state.settingsToggle.close,
  );
  const userState = useSelector((state: RootState) => state.user.userInfo);

  const dispatch = useDispatch();
  const onClose = useCallback(() => dispatch(SettingsClose()), [dispatch]);
  const onToggle = useCallback(() => {
    onClose();
  }, [onClose]);

  const onToggleClose = useCallback(() => dispatch(SettingsClose()), [
    dispatch,
  ]);

  return (
    <SettingContainer darkmode={darkmode} settingsClose={settingsClose}>
      <SettingdefaultTitle>설정 Settings</SettingdefaultTitle>
      <SettingMenuWrapper>
        <SettingMenuList darkmode={darkmode}>
          <li>개발자</li>
          <li>계정명</li>
          <li>사진</li>
        </SettingMenuList>
        <SettingMenuButtonList darkmode={darkmode}>
          <li>Chifuyu@github.com</li>
          <li>{userState?.username}</li>
          <li>
            <SettingThumbnails />
          </li>
          <li>
            <LogOutButtonContainer darkmode={darkmode} onClick={onToggle}>
              <IoIosLogOut />
              Logout
            </LogOutButtonContainer>
          </li>
        </SettingMenuButtonList>
      </SettingMenuWrapper>
      <SettingsCloseWrapper>
        <SettingsCloseBtn onClick={onToggleClose} darkmode={darkmode}>
          닫기
        </SettingsCloseBtn>
      </SettingsCloseWrapper>
    </SettingContainer>
  );
}

export default React.memo(Setting);

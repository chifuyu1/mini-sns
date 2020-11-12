import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import {
  InputCommonStyle,
  InputVirtualEvent,
  UserProfilePhotoStyle,
  CommentSubmitButtonStyle,
} from '../../../util/CommonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducer/index';
import theme from '../../../util/theme';
import {
  removeProfileImageRequest,
  uploadProfileImageRequest,
} from '../../../reducer/user';
import { baseUrl } from '../../../config/config';
// import media from '../../../util/mediaQuery';

const SettingThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingThumbnailsWrapper = styled.form`
  display: flex;
  align-items: center;
`;

// const SettingThumbnailsInput = styled.input<{ darkmode: boolean }>`
//   ${props => InputCommonStyle(props.darkmode)};
//   ${props => InputVirtualEvent(props.darkmode)};
//   flex: 5;
// `;

const SettingThumbnailsInput = styled.input<{ darkmode: boolean }>`
  ${(props) => InputCommonStyle(props.darkmode)};
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
  outline: none;
  border-radius: 0;
  padding: 0;
  border: none;
  flex: 1;
  display: none;
  margin-bottom: 5px;
`;

const AccountThumbnail = styled.div<{ url: string }>`
  ${UserProfilePhotoStyle()};
  background-image: ${(props) =>
    props.url ? `url(${baseUrl}/${props.url})` : 'none'};
  cursor: initial;
`;

// const AnonymousEx = styled.div`
//   font-size: 14px;
//   ${media.medium} {
//     font-size: 12px;
//   }
//   ${media.small} {
//     font-size: 10px;
//   }
// `;

const InputButton = styled.button<{ darkmode: boolean }>`
  ${(props) => InputVirtualEvent(props.darkmode)};
  margin: 0;
  padding: 0 5px;
  height: 30px;
  margin-left: 15px;
  background: ${(props) => (props.darkmode ? theme.dark.bg : theme.light.bg)};
  color: ${(props) => (props.darkmode ? theme.dark.text : theme.light.text)};
  border: none;
  cursor: pointer;
  outline: none;
`;

function SettingThumbnails() {
  const dispatch = useDispatch();
  const profileImageUpload = useRef<HTMLInputElement>(null);
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);

  const userState = useSelector((state: RootState) => state.user.userInfo);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const imageData = new FormData();
      if (!event.target.files) {
        return;
      }
      imageData.append('profileImage', event.target.files[0]);
      imageData.append('id', userState?.id);
      dispatch(uploadProfileImageRequest(imageData));
    },
    [dispatch, userState],
  );

  const onProfileImageUpload = useCallback(() => {
    if (profileImageUpload.current !== null) {
      profileImageUpload.current.click();
    }
  }, []);

  const onRemoveProfileImage = useCallback(() => {
    dispatch(removeProfileImageRequest({ id: userState?.id }));
  }, [dispatch, userState]);

  const userImage = userState?.ProfileImage;

  return (
    <SettingThumbnailsContainer>
      <SettingThumbnailsWrapper encType="multipart/form-data">
        <SettingThumbnailsInput
          darkmode={darkmode}
          name={'profileImage'}
          type="file"
          accept="image/*"
          hidden
          multiple={false}
          onChange={handleChange}
          ref={profileImageUpload}
        />
        <AccountThumbnail url={userImage?.src} />
        <InputButton
          darkmode={darkmode}
          onClick={onProfileImageUpload}
          type="button"
        >
          변경
        </InputButton>
        <InputButton
          darkmode={darkmode}
          onClick={onRemoveProfileImage}
          type="button"
        >
          제거
        </InputButton>
      </SettingThumbnailsWrapper>
    </SettingThumbnailsContainer>
  );
}

export default React.memo(SettingThumbnails);

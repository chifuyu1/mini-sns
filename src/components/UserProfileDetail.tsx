import React from 'react';
import styled from 'styled-components';
import { ContentSubMenuWindowCommon } from '../util/CommonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../reducer/index';
import FriendInsert from './leftmenu/friends/FriendInsert';
import IgnoreInsert from './leftmenu/ignore/IgnoreInsert';
// import { postFilter, postRestore } from './content/postAddReducer';

const UserProfileDetails = styled.ul<{ detail: boolean; darkmode: boolean }>`
  ${(props) => ContentSubMenuWindowCommon(props.detail, props.darkmode)};
`;

type UserProfileDetailProps = {
  detail: boolean;
  username: string;
  id: number;
};

function UserProfileDetail({ detail, username, id }: UserProfileDetailProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  // const dispatch = useDispatch();
  // const onFilter = useCallback((name: string) => dispatch(postFilter(name)), [
  //   dispatch,
  // ]);

  // const onRestore = useCallback(() => dispatch(postRestore()), [dispatch]);

  // const filterCallback = () => {
  //   return { __html: '전체 글 보기' };
  // };

  // const notFilterCallback = () => {
  //   return { __html: '게시글 보기' };
  // };

  return (
    <UserProfileDetails detail={detail} darkmode={darkmode}>
      <li>
        {/* <button
          onClick={() => onFilter(username)}
          dangerouslySetInnerHTML={notFilterCallback()}
        ></button> */}
        {/* <button
          onClick={() => onRestore()}
          dangerouslySetInnerHTML={filterCallback()}
        ></button> */}
      </li>
      <li>
        <FriendInsert username={username} id={id} />
      </li>
      {/* <li>
        <button type="button">쪽지 보내기</button>
      </li> */}
      <li>
        <IgnoreInsert username={username} id={id} />
      </li>
    </UserProfileDetails>
  );
}

export default React.memo(UserProfileDetail);

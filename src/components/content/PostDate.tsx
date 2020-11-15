import React, { useCallback } from 'react';
import { BiX } from 'react-icons/bi';
import { MdModeEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../reducer';
import { removePostRequest } from '../../reducer/post';
import { DatetimeStyle } from '../../util/CommonStyle';
import { PostUpdate } from './styles';

const GetDate = styled.div`
  ${DatetimeStyle}
`;

type PostDateProps = {
  // todayDate: writeDateType;
  todayDate: string;
  id: number;
  UserId: number;
  onUpdate: () => void;
};

function PostDate({ todayDate, id, UserId, onUpdate }: PostDateProps) {
  const dispatch = useDispatch();

  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const userState = useSelector((state: RootState) => state.user.userInfo);

  const onRemove = useCallback(() => {
    if (window.confirm('정말로 삭제하시겠어요?')) {
      dispatch(removePostRequest({ id }));
    }
  }, [dispatch, id]);

  const date = todayDate.split(/\s/);

  return (
    <>
      {UserId === userState?.id || userState?.power === 'admin' ? (
        <>
          <PostUpdate darkmode={darkmode} type='button' onClick={onUpdate}>
            <MdModeEdit />
          </PostUpdate>
          <PostUpdate darkmode={darkmode} type='button' onClick={onRemove}>
            <BiX />
          </PostUpdate>
        </>
      ) : (
        <></>
      )}
      <GetDate>
        {date[0]}
        <br />
        {date[1]}
      </GetDate>
    </>
  );
}

export default React.memo(PostDate);

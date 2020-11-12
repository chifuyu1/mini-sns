import React from 'react';
import { MdPeople } from 'react-icons/md';
import { AlignText } from '../../../util/CommonStyle';

type FriendWrapperProps = {
  onClick: () => void;
  friend: boolean;
};

function FriendWrapper({ friend, onClick }: FriendWrapperProps) {
  return (
    <button onClick={onClick}>
      <MdPeople />
      <AlignText>친구</AlignText>
    </button>
  );
}

export default React.memo(FriendWrapper);

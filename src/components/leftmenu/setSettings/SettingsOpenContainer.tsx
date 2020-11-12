import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { SettingsOpen } from './setSettingsReducer';
import { MdSettings } from 'react-icons/md';
import { AlignText } from '../../../util/CommonStyle';

function SettingsOpenContainer() {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(SettingsOpen()), [dispatch]);

  return (
    <button onClick={onToggle}>
      <MdSettings />
      <AlignText>설정</AlignText>
    </button>
  );
}

export default React.memo(SettingsOpenContainer);

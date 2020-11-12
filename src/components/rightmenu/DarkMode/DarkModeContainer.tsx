import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducer/index';
import { DarkModeButtonTag, DarkModeWrapper } from '../styles';
import { Toggle } from './darkmode';

function DarkModeContainer() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();

  const onToggle = () => dispatch(Toggle());

  return (
    <DarkModeWrapper>
      <span>Dark Mode</span>
      <DarkModeButtonTag darkmode={darkmode} onClick={onToggle}>
        <div className="DarkCircle"></div>
      </DarkModeButtonTag>
    </DarkModeWrapper>
  );
}

export default React.memo(DarkModeContainer);

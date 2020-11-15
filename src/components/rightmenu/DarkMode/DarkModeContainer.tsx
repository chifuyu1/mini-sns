import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducer/index';
import { DarkModeButtonTag, DarkModeWrapper } from '../styles';
import { darkmodeFalse, darkmodeTrue } from './darkmode';

function DarkModeContainer() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();

  const onToggle = () => {
    if (localStorage.getItem('darkmode') === 'false') {
      localStorage.setItem('darkmode', 'true');
      dispatch(darkmodeTrue());
      console.log(localStorage.getItem('darkmode'));
      return;
    }
    if (localStorage.getItem('darkmode') === 'true') {
      localStorage.setItem('darkmode', 'false');
      console.log(localStorage.getItem('darkmode'));
      dispatch(darkmodeFalse());
      return;
    }
  };

  return (
    <DarkModeWrapper>
      <span>Dark Mode</span>
      <DarkModeButtonTag darkmode={darkmode} onClick={onToggle}>
        <div className='DarkCircle'></div>
      </DarkModeButtonTag>
    </DarkModeWrapper>
  );
}

export default React.memo(DarkModeContainer);

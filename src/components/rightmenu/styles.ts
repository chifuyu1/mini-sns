import styled, { css } from 'styled-components';
import media from '../../util/mediaQuery';

export const DarkModeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  span {
    font-size: 16px;
    ${media.medium} {
      font-size: 12px;
    }
  }
`;

export const DarkModeButtonTag = styled.button<{ darkmode: boolean }>`
  outline: none;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 16px;
  margin: 0 0 0 8px;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #ced4da;
  display: flex;
  ${media.medium} {
    margin: 0 0 0 4px;
    width: 30px;
  }

  ${(props) =>
    props.darkmode &&
    css`
      justify-content: flex-end;
    `}
  .DarkCircle {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background: #ff8787;
    ${(props) =>
      props.darkmode &&
      css`
        background-color: #000;
      `}
  }
`;

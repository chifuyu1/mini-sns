import styled from 'styled-components';
import {
  FlexJustifyAlignitems,
  InputVirtualEvent,
  InputVirtualNotEvent,
  LeftMenuFlexGrow,
  MenuListCommonStyle,
  MenuListStyle,
  ResponsiveView,
} from '../../util/CommonStyle';
import media from '../../util/mediaQuery';
import theme from '../../util/theme';

export const LeftMenuWrapper = styled.div`
  width: 200px;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 50px;
  height: fit-content;
  ${media.medium} {
    max-width: 110px;
    display: flex;
    flex: 1;
    padding-left: 10px;
  }
  ${media.small} {
    max-width: ${media.size.small};
    padding: 0;
    flex: 1;
    display: flex;
    width: auto;
    z-index: 9999;
    top: 0;
    position: sticky;
  }
`;

export const LeftMenuSearchBox = styled.div<{ darkmode: boolean }>`
  ${FlexJustifyAlignitems};
  ${LeftMenuFlexGrow()};
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0 4px;
  background-color: #fff;
  /* position: relative; */

  /* .resultFrame {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    width: 100%;
    height: 50px;
  } */

  .SearchIcon {
    font-size: 16px;
    ${media.small} {
      font-size: 20px;
    }
  }
  ${media.small} {
    padding: 0;
    margin: 0;
    border-radius: 0;
    flex-direction: row-reverse;
    flex: 1;
    height: 40px;
    order: 1;
    background: ${(props) => (props.darkmode ? theme.dark.box : '#fff')};
  }
`;

export const LeftMenuSearchContainer = styled.form`
  ${LeftMenuFlexGrow()};
`;

export const LeftMenuSearchInput = styled.input<{
  darkmode: boolean;
}>`
  ${(props) => InputVirtualEvent(props.darkmode)};
  ${InputVirtualNotEvent};
  width: 100%;
`;

export const LeftMenuListStyle = styled.ul<{
  darkmode: boolean;
  friend: boolean;
}>`
  ${(props) => MenuListCommonStyle(props.darkmode)};
  ${media.small} {
    border-radius: 0;
    height: 50px;
  }
  li {
    ${(props) => MenuListStyle(props.darkmode)};
    ${media.small} {
      width: ${100 / 7}%;
    }
  }
  & > li > button {
    ${LeftMenuFlexGrow()};
    &:focus {
      border: none;
      outline: none;
    }
    ${media.small} {
      padding: 0;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
  & .friends {
    position: relative;
    ${media.small} {
    }
    .friend-box {
      ${media.small} {
        display: ${(props) => (props.friend ? 'block' : 'none')};
        position: absolute;
        top: 50px;
        width: 90px;
        /* display: none; */
        li {
          ${media.small} {
            width: 100%;
          }
        }
      }
    }
  }
  & .mobileNight {
    display: none;
    ${media.small} {
      display: flex;
    }
  }
`;

export const RightMenuView = styled.div`
  ${ResponsiveView};
  li {
    list-style: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  cursor: pointer;
`;

export const ResetIcon = styled(Icons)<{ isReset: boolean }>`
  animation-name: rotate;
  animation-duration: ${(props) => (props.isReset ? '1s' : '0s')};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

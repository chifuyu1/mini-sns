import styled from 'styled-components';
import media from '../../../util/mediaQuery';
import { MenuListCommonStyle, TagStyle } from '../../../util/CommonStyle';

export const IgnoreListWrapper = styled.ul<{
  darkmode: boolean;
  friend: boolean;
}>`
  ${(props) => MenuListCommonStyle(props.darkmode)};
  top: 0;
  left: 0;
  display: ${(props) => (props.friend ? 'flex' : 'none')};
  min-width: 100%;
  font-size: 12px;
  text-align: center;
  flex-direction: column;
  li {
    margin: 4px 0;
    justify-content: center;
    display: flex;
  }
  ${media.small} {
    display: ${(props) => (props.friend ? 'flex' : 'none')};
    li {
      width: 100% !important;
      margin: 5px 0;
    }
  }
`;

export const NameSpace = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

export const IgnoreRemoveContainer = styled.div<{ darkmode: boolean }>`
  ${(props) => TagStyle(props.darkmode)};
  margin: 0;
  display: block;
  border-radius: 0;
  padding: 2px 4px;
  font-size: 12px;
`;

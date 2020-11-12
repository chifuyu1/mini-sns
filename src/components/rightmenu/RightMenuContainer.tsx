import React from 'react';
import styled from 'styled-components';
import { MdTrendingUp } from 'react-icons/md';
import DarkModeContainer from './DarkMode/DarkModeContainer';
import { TagStyle, ReverseResponsiveView } from '../../util/CommonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/index';
import theme from '../../util/theme';

const RightMenuWrapper = styled.div`
  width: 200px;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  flex-direction: column;
  ${ReverseResponsiveView}
`;

const RightMenuBox = styled.div`
  position: relative;
`;

const RightMenuBoxFixer = styled.div<{ darkmode: boolean }>`
  position: fixed;
  backface-visibility: hidden;
  display: flex;
  flex: 1;
  .widthFixer {
    width: 200px;
    background: white;
    border-radius: 10px;
    background: ${(props) =>
      props.darkmode ? theme.dark.box : theme.light.box};
    .trending {
      padding: 12px 0;
      font-size: 14px;
      font-weight: 600;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 6px;
        font-size: inherit;
      }
    }
  }
`;

const RightMenuTagStyle = styled.span<{ darkmode: boolean }>`
  ${(props) => (props.darkmode ? TagStyle(true) : TagStyle(false))}
`;

const RightMenuTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

function RightMenuContainer() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  return (
    <RightMenuWrapper>
      <RightMenuBox>
        <RightMenuBoxFixer darkmode={darkmode}>
          <div className="widthFixer">
            <div className="trending">
              <MdTrendingUp />
              자주 찾는 주제
            </div>
            <RightMenuTagContainer>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;React
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;Vue
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;Angular
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;HTML
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;CSS
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;JavaScript
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;TypeScript
              </RightMenuTagStyle>
              <RightMenuTagStyle darkmode={darkmode}>
                &#35;&nbsp;PHP
              </RightMenuTagStyle>
            </RightMenuTagContainer>
            <DarkModeContainer />
          </div>
        </RightMenuBoxFixer>
      </RightMenuBox>
    </RightMenuWrapper>
  );
}

export default React.memo(RightMenuContainer);

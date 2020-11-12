import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/index';
import media from '../../util/mediaQuery';
import { ContentSubMenuWindowCommon, setLogo } from '../../util/CommonStyle';
import test from '../../images/favicon.png';
import LINE from '../../images/LINE.png';
import facebook from '../../images/facebook.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import { baseUrl } from '../../config/config';

const SharingContainer = styled.ul<{ sharing: boolean; darkmode: boolean }>`
  ${(props) => ContentSubMenuWindowCommon(props.sharing, props.darkmode)};
  margin: 0 0 0 110px;
  flex-direction: row;
  width: auto;
  background-color: transparent;
  left: 60px;
  align-items: initial;
  justify-content: initial;
  margin: 0;
  ${media.medium} {
    left: initial;
    right: 0;
    width: auto;
    flex-direction: row;
    background: transparent;
    margin-top: 30px;
    margin-left: 0;
  }

  li {
    width: 30px;
    height: 30px;
    margin: 0 4px;
  }

  li:first-child {
    margin-left: 0;
  }

  li:last-child {
    margin-right: 0;
  }

  .kakao,
  .LINE,
  .facebook,
  .twitter,
  .instagram {
    ${setLogo};
    text-indent: -9999px;
    width: inherit;
    height: inherit;
    background-size: contain;
  }
  .kakao {
    background-image: url(${test});
  }
  .LINE {
    background-image: url(${LINE});
  }
  .facebook {
    background-image: url(${facebook});
  }
  .twitter {
    background-image: url(${twitter});
  }
  .instagram {
    background-image: url(${instagram});
  }
`;

type PostSharingWindowProps = {
  sharing: boolean;
};

function PostSharingWindow({ sharing }: PostSharingWindowProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);

  return (
    <SharingContainer sharing={sharing} darkmode={darkmode}>
      <li>
        <a
          href={baseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kakao"
        >
          Mini-SNS
        </a>
      </li>
    </SharingContainer>
  );
}

export default React.memo(PostSharingWindow);

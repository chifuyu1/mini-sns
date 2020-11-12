import styled from 'styled-components';
import { CommentSubmitButtonStyle, MsgContainer } from '../../util/CommonStyle';
import media from '../../util/mediaQuery';

export const ListContainer = styled.div<{ darkmode: boolean; toggle: boolean }>`
  ${(props) => MsgContainer(props.darkmode, !props.toggle)};
  h3 {
    margin: 0 auto 8px auto;
  }

  input[type='text'] {
    margin-bottom: 20px;
  }

  textarea {
    resize: none;
    flex: 1;
    margin-bottom: 20px;
  }

  .pageNum {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .pageNumCenter {
    display: flex;

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin: 0 4px;
      }
      li:first-child {
        margin-left: 0;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const MessageSendBtn = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
`;

export const MessageCloseButton = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
`;

export const MessageGoBack = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
  width: auto;
`;

export const ListPositioner = styled.div`
  position: relative;
  width: 100%;
  background: black;
  display: flex;
  align-items: center;
  z-index: 999;
`;

export const MessageListContainer = styled.div<{
  darkmode: boolean;
  toggle: boolean;
}>`
  ${(props) => MsgContainer(props.darkmode, props.toggle)};
  h3 {
    margin: 0 auto 8px auto;
  }

  .pageNum {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .pageNumCenter {
    display: flex;

    ul {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin: 0 4px;
      }
      li:first-child {
        margin-left: 0;
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const MessageButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 12px;
  box-sizing: border-box;
`;

export const MsgItemBox = styled.div<{ darkmode: boolean }>`
  display: flex;
  flex: 1;
  min-width: 100%;
  margin-bottom: 8px;

  table {
    min-width: 100%;
  }

  thead {
    background: ${(props) => (props.darkmode ? 'none' : '#fff')};
  }

  .noMsg {
    text-align: center;
  }

  ${media.medium} {
    /* .noMsgLeft, */
    .noMsgRight {
      display: none;
    }
  }

  ${media.small} {
    .noMsgLeft,
    .noMsgRight {
      display: none;
    }
  }

  .firstRow > th {
    padding: 4px 0 3px 0;
    font-size: 12px;
    text-align: center;
    font-weight: 400;
  }

  table .day {
    padding: 0 10px;
    text-align: center;
  }

  table .title {
    white-space: nowrap;
  }

  ${media.medium} {
    table .senderName {
      min-width: 140px;
      max-width: 140px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    table .day {
      min-width: 80px;
      max-width: 80px;
      overflow: hidden;
      display: none;
    }

    table .title {
      min-width: 250px;
      max-width: 250px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
  ${media.small} {
    table .senderName {
      display: none;
    }

    table .day {
      display: none;
    }

    table .title {
      min-width: 192px;
      max-width: 192px;
      overflow: hidden;
    }
  }
`;

export const EditorSettings = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'underline', 'strike'],
      ['link', 'image', 'video'],
    ],
  },
  formats: [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'link',
    'image',
    'video',
  ],
};

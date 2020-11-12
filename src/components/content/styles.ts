import styled from 'styled-components';
import { InputVirtualEvent } from '../../util/CommonStyle';

export const PostUpdate = styled.button<{ darkmode: boolean }>`
  ${(props) => InputVirtualEvent(props.darkmode)};
  cursor: pointer;
  margin-right: 5px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`;

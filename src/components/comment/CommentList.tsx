import React, { useCallback } from 'react';
import styled from 'styled-components';
import CommentListItem from './CommentListItem';
import { ContentBox } from '../../util/CommonStyle';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer/index';
import { MdRefresh } from 'react-icons/md';
import { getCommentRequest } from '../../reducer/post';

const CommentListContainer = styled.ul`
  background-color: #f1f3f5;
  ${ContentBox};
  height: auto;
  max-width: initial;
  border-radius: 15px;
  flex-direction: column;
  margin: 20px auto;
  padding: 10px 20px;
  .refresh {
    display: flex;
    flex-direction: row-reverse;
  }
`;
/* display: ${(props) => (props.dis === 0 ? 'none' : 'flex')}; */

const CommentListRefresher = styled.button<{ clicked: boolean }>`
  margin: 0;
  height: 24px;
  width: 24px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  outline: none;
  cursor: pointer;
  @keyframes circle {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation-name: circle;
  animation-duration: ${(props) => (props.clicked ? '1s' : '0s')};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  svg {
    font-size: 24px;
  }
`;

type CommentListProps = {
  id: number;
};

function CommentList({ id }: CommentListProps) {
  // const comment = useSelector((state: RootState) => state.CommentReducers);
  // const [clicked, setClicked] = useState(false);
  const postState = useSelector((state: RootState) => state.post.userPost);
  const clicked = useSelector(
    (state: RootState) => state.post.getCommentLoading,
  );

  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    dispatch(getCommentRequest({ commentId: id }));
  }, [dispatch, id]);
  const post = postState.find((info) => info.id === id);

  // props => id는 post id
  if (post?.Comments.length === 0) {
    return <></>;
  } else
    return (
      <CommentListContainer>
        <div className="refresh">
          <CommentListRefresher
            type="button"
            clicked={clicked}
            onClick={onRefresh}
          >
            <MdRefresh />
          </CommentListRefresher>
        </div>
        {post?.Comments.map((list: any) => {
          if (list.PostId === id) {
            return (
              <CommentListItem
                key={list.id}
                id={list.id}
                content={list.content}
                writeDate={list.createdAt}
                PostId={list.PostId}
                username={list.User?.username}
              />
            );
          } else return <></>;
        })}
      </CommentListContainer>
    );
}

export default React.memo(CommentList);

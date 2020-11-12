import React from 'react';
import Content from '../Content';
// import { postRestore } from '../content/postAddReducer';

function ErrorSearch() {
  const searchError = {
    key: 'search-err',
    id: -404,
    username: '',
    UserId: -404,
    title: '검색된 내용이 없습니다!',
    content: '잠시 후 홈 화면으로 돌아갑니다.',
    profile: '',
    date: '1970-01-01',
  };
  const { key, id, username, title, content, date, UserId } = searchError;

  return (
    <Content
      key={key}
      id={id}
      UserId={UserId}
      username={username}
      title={title}
      content={content}
      date={date}
    />
  );
}

export default ErrorSearch;

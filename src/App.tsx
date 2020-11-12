import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import ContentContainer from './components/ContentContainer';
import theme from './util/theme';
import LoginWindow from './components/loginwindow/LoginWindowContainer';
import Write from './components/write/Write';
import { Switch, Route } from 'react-router-dom';
import ErrorPage from './components/error-handling/ErrorPage';
import { useSelector } from 'react-redux';
import { RootState } from './reducer';
import MessageList from './components/message/MessageList';

const GlobalStyle = createGlobalStyle<{ darkmode: boolean }>`
  html {
      height: 100%;
  }
  body {
      background: ${(props) =>
        props.darkmode ? theme.dark.bg : theme.light.bg};
      color: ${(props) =>
        props.darkmode ? theme.dark.text : theme.light.text};
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      overflow-y: scroll;
      height: 100%;
      #root {
        height: 100%;
      }
    }
`;

function App() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <>
      <GlobalStyle darkmode={darkmode} />
      <MessageList />
      <Switch>
        <Route path="/" component={ContentContainer} exact />
        <Route path="/login" component={LoginWindow} exact />
        <Route path="/write" component={Write} exact />
        {/* <Route path="/messagelist" component={MessageList} exact /> */}
        <Route render={({ location }) => <ErrorPage location={location} />} />
      </Switch>
    </>
  );
}

export default App;

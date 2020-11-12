import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer/index';
import { GoMarkGithub } from 'react-icons/go';
import LoginCloseButton from './LoginCloseButton';
import {
  LoginWindowAuthSite,
  LoginWindowBox,
  LoginWindowContainer,
  LoginWindowForm,
  LoginWindowInput,
  LoginWindowInputDisplay,
  LoginWindowPicture,
  LoginWindowWrapper,
} from './styles';
import {
  loginInitialze,
  loginRequest,
  signupRequest,
} from '../../reducer/user';
import Loading from '../loading/Loading';
import { useHistory } from 'react-router-dom';

function LoginWindow() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const [rpw, setRpw] = useState('');
  const [signup, setSignup] = useState(false);
  const [matchError, setMatchError] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const usernameInput = useRef<HTMLInputElement>(null);
  const pwInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user);
  const { signupLoading, loginLoading, loginError } = userState;

  const onUsername = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const onPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPw(e.target.value);
    },
    [setPw],
  );

  const onKeyboardCapsLock = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      let isCapsLock = e.getModifierState('CapsLock');
      if (isCapsLock) {
        setUppercase(true);
      } else {
        setUppercase(false);
      }
    },
    [],
  );
  const onMouseCapsLock = useCallback(
    (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
      let isCapsLock = event.getModifierState('CapsLock');
      if (isCapsLock) {
        setUppercase(true);
      } else {
        setUppercase(false);
      }
    },
    [],
  );

  const onChangeRpw = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRpw(e.target.value);
  }, []);

  const onSign = useCallback(() => {
    setSignup(true);
  }, []);

  const onSignOff = useCallback(() => {
    setSignup(false);
    setRpw('');
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (signup && pw !== rpw) {
        setMatchError(true);
        return;
      }
      const at = username.indexOf('@');
      const forwardId = username.substring(0, at);

      if (!usernameInput.current) {
        return;
      }
      if (!pwInput.current) {
        return;
      }
      if (username.length === 0) {
        alert('아이디를 입력하세요');
        usernameInput.current.focus();
        return;
      }

      if (forwardId.length > 15) {
        alert('아이디는 15자리 이하만 가능합니다!');
        usernameInput.current.focus();
        return;
      }
      if (pw.trim().length < 6) {
        alert(
          '비밀번호는 영문, 숫자, 특수기호를 포함한 6~20자 이내로 가능합니다.',
        );
        pwInput.current.focus();
        return;
      }
      if (
        !RegExp('^(?=.*[A-Za-z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{6,20}$').test(
          pw.trim(),
        )
      ) {
        alert(
          '비밀번호는 영문, 숫자, 특수기호를 포함한 6~20자 이내로 가능합니다.',
        );
        return;
      }

      if (signup) {
        setSignup(false);
        if (username === 'chifuyu' || username === 'Chifuyu') {
          dispatch(signupRequest({ username, pw, power: 'admin' }));
        } else {
          dispatch(signupRequest({ username, pw, power: 'normal' }));
        }
      }

      if (!signup) {
        if (username === 'Chifuyu' || username === 'chifuyu') {
          alert('관리자 계정으로 로그인합니다!');
        }
        dispatch(loginRequest({ username, pw }));
      }
    },
    [signup, dispatch, username, pw, rpw],
  );

  useEffect(() => {
    if (userState.userInfo) {
      history.push('/');
    }
  }, [userState, history, dispatch]);

  if (loginError) {
    dispatch(loginInitialze());
    alert(`${loginError}`);
  }

  return (
    <LoginWindowContainer>
      <LoginWindowWrapper darkmode={darkmode}>
        <LoginWindowBox darkmode={darkmode}>
          <div className="box">
            <LoginWindowPicture />
            <LoginWindowInputDisplay darkmode={darkmode}>
              <LoginWindowForm
                onSubmit={onSubmit}
                darkmode={darkmode}
                method="POST"
              >
                <div className="FromGroup">
                  <span>Username</span>
                  <LoginWindowInput
                    darkmode={darkmode}
                    type="text"
                    placeholder="username"
                    onChange={onUsername}
                    value={username}
                    name="username"
                    ref={usernameInput}
                    onKeyUp={onKeyboardCapsLock}
                    onMouseDown={onMouseCapsLock}
                  />
                </div>
                <div className="FormGroup">
                  <span>Password</span>
                  <LoginWindowInput
                    darkmode={darkmode}
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={onPassword}
                    value={pw}
                    ref={pwInput}
                    onKeyUp={onKeyboardCapsLock}
                    onMouseDown={onMouseCapsLock}
                  />
                </div>

                {signup ? (
                  <LoginWindowInput
                    darkmode={darkmode}
                    type="password"
                    placeholder="Repeat password"
                    onChange={onChangeRpw}
                    value={rpw}
                    onKeyUp={onKeyboardCapsLock}
                    onMouseDown={onMouseCapsLock}
                  />
                ) : (
                  <button
                    className="LoginSubmit"
                    type="button"
                    onClick={onSign}
                  >
                    Sign Up
                  </button>
                )}
                {matchError ? '비밀번호가 일치하지 않습니다.' : ''}
                {uppercase ? 'CapsLock이 켜져있습니다.' : ''}
                <button className="LoginSubmit" type="submit">
                  {signup ? (
                    signupLoading ? (
                      <Loading />
                    ) : (
                      'Account Resister'
                    )
                  ) : loginLoading ? (
                    <Loading />
                  ) : (
                    'Sign In'
                  )}
                </button>
                {signup ? (
                  <button className="LoginSubmit" onClick={onSignOff}>
                    Back
                  </button>
                ) : (
                  <></>
                )}
                {signup ? (
                  <></>
                ) : (
                  <LoginWindowAuthSite darkmode={darkmode}>
                    <a
                      className="GitHubLogin"
                      href="https://github.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GoMarkGithub />
                      Sign for GitHub Account
                    </a>
                  </LoginWindowAuthSite>
                )}
              </LoginWindowForm>
            </LoginWindowInputDisplay>
          </div>
          <div className="btn">
            <LoginCloseButton />
          </div>
        </LoginWindowBox>
      </LoginWindowWrapper>
    </LoginWindowContainer>
  );
}

export default React.memo(LoginWindow);

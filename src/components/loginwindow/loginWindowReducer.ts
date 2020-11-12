import { ActionType } from 'typesafe-actions';

const LOGIN_WINDOW_OPEN = 'LOGIN/LOGINOPEN' as const;
const LOGIN_WINDOW_CLOSE = 'LOGIN/LOGINCLOSE' as const;

export const loginOpen = () => ({
  type: LOGIN_WINDOW_OPEN,
});

export const loginClose = () => ({
  type: LOGIN_WINDOW_CLOSE,
});

type LoginToggle = {
  open: boolean;
  close: boolean;
};

const initialState: LoginToggle = {
  open: false,
  close: true,
};

const actions = { loginOpen, loginClose };

type Actions = ActionType<typeof actions>;

export default function loginToggle(
  state: LoginToggle = initialState,
  action: Actions,
) {
  switch (action.type) {
    case LOGIN_WINDOW_OPEN:
      return {
        ...state,
        open: true,
        close: false,
      };
    case LOGIN_WINDOW_CLOSE:
      return {
        ...state,
        open: false,
        close: true,
      };
    default:
      return state;
  }
}

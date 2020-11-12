const DISPLAY_USER_FUNCTION = '..content/DISPLAYUSERFUNCTION';

export const DisplayUserFunction = () => ({ type: DISPLAY_USER_FUNCTION });

type ActionTypes = ReturnType<typeof DisplayUserFunction>;

type StateType = {
  display: boolean;
};

const initialState: StateType = {
  display: false
};

function content(state: StateType = initialState, action: ActionTypes) {
  switch (action.type) {
    case DISPLAY_USER_FUNCTION:
      return {
        ...state
      };
    default:
      return new Error('Unhandled Type Error');
  }
}

export default content;

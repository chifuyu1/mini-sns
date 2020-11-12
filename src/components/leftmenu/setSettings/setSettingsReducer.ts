import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const SettingsOpen = createStandardAction('SETTINGS/SETTINGSOPEN')();
export const SettingsClose = createStandardAction('SETTINGS/SETTINGSCLOSE')();

type Toggle = {
  open: boolean;
  close: boolean;
};

const initialState: Toggle = {
  open: false,
  close: true
};

const actions = { SettingsOpen, SettingsClose };

type Actions = ActionType<typeof actions>;

const settingsToggle = createReducer<Toggle, Actions>(initialState)
  .handleAction(SettingsOpen, state => ({ ...state, open: true, close: false }))
  .handleAction(SettingsClose, state => ({
    ...state,
    open: false,
    close: true
  }));

export default settingsToggle;

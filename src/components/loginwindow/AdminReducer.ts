import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const AdminTrue = createStandardAction('ADMIN/ADMINTRUE')();
export const AdminFalse = createStandardAction('ADMIN/ADMINFALSE')();

const actions = { AdminTrue, AdminFalse };

type StateType = {
  admin: boolean;
};

const initialState: StateType = {
  admin: false
};

type Actions = ActionType<typeof actions>;

const AdminReducer = createReducer<StateType, Actions>(initialState)
  .handleAction(AdminTrue, state => ({ admin: true }))
  .handleAction(AdminFalse, state => ({ admin: false }));

export default AdminReducer;

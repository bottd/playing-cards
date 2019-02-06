import * as connectionStatusActions from './connectionStatusActions';
import * as handActions from './handActions';
import * as ownerActions from './ownerActions';
import * as roomIdActions from './roomIdActions';
import * as socketActions from './socketActions';
import * as userIdActions from './userIdActions';
import * as usernameActions from './usernameActions';

const actionTypes = {
  ...connectionStatusActions.actionTypes,
  ...handActions.actionTypes,
  ...ownerActions.actionTypes,
  ...roomIdActions.actionTypes,
  ...socketActions.actionTypes,
  ...userIdActions.actionTypes,
  ...usernameActions.actionTypes,
};

export default actionTypes;

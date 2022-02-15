const authCheck = (state = { userStatus: { status: 3 } }, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return Object.assign({}, state, {
          userStatus: action.payload
        });
  
      case 'LOGIN_OUT':
        return Object.assign({}, state, {
          userStatus: { status: 3 }
        });
    }
  
    return state;
  };
  
  export default authCheck;
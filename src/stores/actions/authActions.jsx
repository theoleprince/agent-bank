
export const LOGIN_USER = "LOGIN";

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};
  
  export const logoutUser = () => (dispatch) => {
    // Effectuez les opérations de déconnexion nécessaires
    dispatch({ type: 'LOGOUT' });
  };
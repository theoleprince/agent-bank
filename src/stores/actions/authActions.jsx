export const LOGIN_USER = "LOGIN";

export const loginUser = (user) => {
  return {
    type: LOGIN_USER,
    payload: user,
  };
};

export const logoutUser = () => ({
  type: "LOGOUT",
});

export const updateUser = (user) => {
  return {
    type: 'PROFIL_USER',
    payload: user,
  };
}

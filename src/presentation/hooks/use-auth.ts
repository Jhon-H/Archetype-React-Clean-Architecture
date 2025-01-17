export const useAuth = () => {
  const user = { loggedIn: true };

  return {
    isAuth: user && user.loggedIn,
  };
};

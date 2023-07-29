export const setUserToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const setUserRefreshToken = (token) => {
  localStorage.setItem(REFRESH_TOKEN_NAME, token);
};

export const getUserToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const clearUserTokens = () => {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(REFRESH_TOKEN_NAME);
};

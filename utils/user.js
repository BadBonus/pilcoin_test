const tokenName = "token";
const refreshTokenName = "token";

export const setUserToken = (token) => {
  localStorage.setItem(tokenName, token);
};

export const setUserRefreshToken = (token) => {
  localStorage.setItem(refreshTokenName, token);
};

export const clearUserTokens = () => {
  localStorage.removeItem(tokenName);
  localStorage.removeItem(refreshTokenName);
};

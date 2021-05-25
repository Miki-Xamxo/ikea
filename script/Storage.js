export const getLocalStorege = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

export const setLocalStorege = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

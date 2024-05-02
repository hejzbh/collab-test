export const saveInLocalStorage = (key: string, data: any) => {
  // 1)
  if (typeof data === undefined) return null;
  // 2)
  localStorage.setItem(key, JSON.stringify(data));
};

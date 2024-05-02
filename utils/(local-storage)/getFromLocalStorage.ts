export const getFromLocalStorage = (key: string) => {
  // 1)
  const storedValue = localStorage?.getItem(key);

  // 2)
  return storedValue ? JSON.parse(storedValue) : null;
};

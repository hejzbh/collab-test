export const convertQsToObject = (searchParamsQueryEntries: any) => {
  let searchParams: any = {};

  for (let [key, value] of searchParamsQueryEntries) {
    searchParams[key] = value;
  }
  return searchParams;
};

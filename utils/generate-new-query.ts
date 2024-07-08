import { HomePageProps } from "@/app/(main)/page";

export const generateNewQuery = ({
  searchParams,
  newSearchParams,
}: {
  searchParams: Partial<HomePageProps>["searchParams"];
  newSearchParams: any;
}) => {
  // 1)
  let updatedSearchParams: any = { ...searchParams };

  // 2) Loop over newSearchParams
  for (let [key, value] of Object.entries(newSearchParams)) {
    // If we deleted query value, for example {q:""}, delete it from searchParams
    if (!value) {
      delete updatedSearchParams[key];
      continue;
    }
    // Otherwise, update that value.
    updatedSearchParams[key] = value;
  }

  // Convert object to query string (key=value&key=value&key=value)
  const queryString = Object.keys(updatedSearchParams)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          updatedSearchParams[key]
        )}`
    )
    .join("&");

  return queryString;
};

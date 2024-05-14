import { HomePageProps } from "@/app/(main)/page";

export const generateNewQuery = ({
  searchParams,
  newSearchParams,
}: {
  searchParams: HomePageProps["searchParams"];
  newSearchParams: any;
}) => {
  let updatedSearchParams: any = { ...searchParams };

  for (let [key, value] of Object.entries(newSearchParams)) {
    if (!value) {
      delete updatedSearchParams[key];
      continue;
    }

    updatedSearchParams[key] = value;
  }

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

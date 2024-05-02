import { getExactTypeOf } from "./getExactTypeOf";

export const clsx = (...params: any[]) => {
  // 1)
  let classNames: string[] = [];

  // 2) Do filtering
  for (let i = 0; i < params.length; i++) {
    // 1)
    const value = params[i];

    // 2) Skip values if they are false
    if (!value) continue;

    // 3) What is exact value type
    const type = getExactTypeOf(value);

    // 3)
    if (type === "string") {
      classNames.push(value);
      continue;
    }

    // 4)
    if (type === "object") {
      // Keys are class names, and valeus are condition for example {"text-red": isError }
      Object.entries(value)?.map(([className, isStatmentTrue]) =>
        isStatmentTrue ? classNames.push(className) : ""
      );
    }
  }

  // 3) Return valid class name
  return classNames.join(" ");
};

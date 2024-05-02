export const getExactTypeOf = (value: any): ExactType => {
  if (!value) return null;

  // 1) Is type object
  if (value === "object") {
    // Is array ?
    if (Array.isArray(value)) return "array";
  }

  return typeof value as ExactType;
};

export type ExactType = "array" | "object" | "string" | "number" | null;

export const capitalizeText = (text: string) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

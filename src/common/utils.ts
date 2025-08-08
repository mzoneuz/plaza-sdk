export const getNumber = (value: unknown, defaultValue: number = 0): number => {
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? defaultValue : parsed;
  }
  return defaultValue;
};

export const pasteAuthHeader = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};
export const pasteAuthHeaderAndApikey = (token: string, apikey = "2qHIakuLe5") => {
  return { Authorization: `Bearer ${token}`, apikey };
};

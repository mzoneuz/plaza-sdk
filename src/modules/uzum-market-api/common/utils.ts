export const pasteAuthHeader = (token: string) => {
  return { Authorization: `Bearer ${token}` };
};

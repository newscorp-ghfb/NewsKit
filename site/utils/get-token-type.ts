export const getTokenType = (
  tokensObject: Object,
  type: string,
): Array<{tokenName: string; tokenValue: string}> =>
  Object.entries(tokensObject)
    .filter(([name]) => name.startsWith(type))
    .map(([tokenName, tokenValue]) => ({tokenName, tokenValue}));

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
export const truncateEthAddress = (address: string, first = 4, last = 4) => {
  // Captures 0x + 4 characters, then the last 4 characters.
  const strRegEx = `\^(0x[a-zA-Z0-9]{${first}})[a-zA-Z0-9]+([a-zA-Z0-9]{${last}})$`;
  const truncateRegex = new RegExp(strRegEx);

  const match = address?.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

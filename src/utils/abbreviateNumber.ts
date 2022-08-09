export function abbreviateNumber(number: number): string {
  const formatedNumber = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short',
  }).format(number);

  return formatedNumber;
}

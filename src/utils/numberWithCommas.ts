export function numberWithCommas(number: number): string {
  const formatedNumber = number.toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });

  return formatedNumber;
}

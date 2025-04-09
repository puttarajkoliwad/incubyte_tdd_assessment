export const add = (numbers:string): number => {
  if (!numbers) return 0;

  let delimiter: RegExp = /,|\n/;

  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n([\s\S]*)$/);
    if (match) {
      delimiter = new RegExp(match[1]);
      numbers = match[2];
    }
  }

  const nums = numbers
    .split(delimiter)
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n));

  const negatives = nums.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
export const addDecimal = (price: number): string =>
  Number.isInteger(price) ? `${price.toString()}.00` : `${price}`;

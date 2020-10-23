export const addDecimal = (price: number) =>
  Number.isInteger(price) ? `${price.toString()}.00` : price;

 export const addDecimal = (price) => Number.isInteger(price) ? `${price.toString()}.00` : price;

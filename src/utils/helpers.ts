export const getAuthor = (authors: string): string => {
  const authorsArray = authors.split(", ");

  if (authorsArray.length === 1) {
    return `${authorsArray[0]}`;
  } else if (authorsArray.length > 1) {
    return `${authorsArray[0]}, ...`;
  } else {
    return "Unknown author";
  }
};

export const getPrice = (price: string): string => {
  return price === "$0.00" ? "Free" : price;
};

export const validateSearchValue = (searchValue: string): string => {
  return searchValue.trim().toLowerCase();
};

export const getShortBookTitle = (title: string): string => {
  if (title.length > 40) {
    return `${title.slice(0, 35)}...`;
  } else return title;
};

export const getPagesCount = (totalPages: string): number => {
  return Math.ceil(+totalPages / 10);
};

export const getPriceAsNumber = (price: string): number => {
  if (price === "$0.00") {
    return 0;
  } else {
    return +price.slice(1);
  }
};

export const getItemTotalPrice = (price: string, amount: number): string => {
  return `$${(getPriceAsNumber(price) * amount).toFixed(2)}`;
};

export const genderOptions = [
  { label: "male", value: "male" },
  { label: "female", value: "female" },
];

export const getAgeOptions = () => {
  let options = getArrayOfOptionsFromMinMax(0, 100, 1);
  return options
    .filter((option) => option > 14)
    .map((option) => ({ label: option, value: option }));
};

export const getItemOptions = (productsList) => {
  let categories = productsList.map((product) => product.category);
  let duplicateCountObj = {};

  categories &&
    categories.forEach((category) => {
      if (duplicateCountObj[category]) {
        duplicateCountObj[category] += 1;
      } else {
        duplicateCountObj[category] = 1;
      }
    });

  let categoryArr = Object.keys(duplicateCountObj);

  if (categoryArr.length >= 1) {
    return categoryArr.map((category) => ({
      label: category,
      value: category,
    }));
  }

  return [];
};
export const getPriceOptions = (productsList) => {
  let priceArr = productsList.map((product) => product.budget);
  let min = Math.min.apply(Math, priceArr);
  let max = Math.max.apply(Math, priceArr);
  let options = getArrayOfOptionsFromMinMax(min, max, 10000);
  return convertToRangeOptions(options);
};

export const convertToRangeOptions = (options) => {
  return options.map((option, index) => {
    if (index === options.length - 1) return {};
    return {
      label: `${option} - ${options[index + 1]}`,
      value: `${options[index]} - ${options[index + 1]}`,
    };
  });
};

export const getArrayOfOptionsFromMinMax = (min, max, range = 10) => {
  let options = [];
  for (let i = 0; i <= max; i += range) {
    options.push(i);
  }
  return options;
};

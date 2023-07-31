export function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

export const convertPriceStringToNumber = (priceString) => {
  // Assuming the priceString is in the format "₹500 for two"
  const regex = /₹(\d+)/;
  const match = priceString.match(regex);

  if (match && match[1]) {
    return parseInt(match[1], 10);
  } else {
    return 0; // Return a default value (or handle it based on your requirements)
  }
};

export const replaceItemAtIndex = (arr, index, newValue) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export const removeItemAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

export const formatDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const newdate = year + "/" + month + "/" + day;

  return newdate;
};

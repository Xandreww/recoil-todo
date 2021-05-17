export const replaceItemAtIndex = (arr, index, newValue) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export const removeItemAtIndex = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

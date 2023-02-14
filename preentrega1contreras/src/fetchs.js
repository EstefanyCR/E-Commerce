export const fetchs = (items) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
};

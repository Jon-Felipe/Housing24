export const formatNumber = (num) => {
  let nf = new Intl.NumberFormat('en-US');
  return nf.format(num);
};

const reducer = (key) => (accumulator, currentValue) => {
  (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(
    currentValue
  );
  return accumulator;
};

const groupBy = (array, key) => {
  return array.reduce(reducer(key), {});
};
export default groupBy;

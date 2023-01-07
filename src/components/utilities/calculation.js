const getRandomNumber = (maxNumber) => {
  let randomNumber = Math.round(Math.random() * 10);
  if (maxNumber > randomNumber) {
    return randomNumber;
  }
  return getRandomNumber(maxNumber);
};
export { getRandomNumber };

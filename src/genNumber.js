const validateNumber = (number) => {
  const digits = String(number).split('');
  const digitsSet = new Set(digits);
  return digits.length === digitsSet.size;
}

const genNumber = () => {
  let isValid = false;
  let number = 0;
  while (!isValid) {
    number = Math.round(Math.random() * 8999) + 1000; // 1000...9999
    isValid = validateNumber(number)
  }
  return number;
}

export default genNumber
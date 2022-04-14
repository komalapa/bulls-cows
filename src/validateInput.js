const validateInput = (input) => {
  const digitsInput = input.split('').filter(char => char.match(/\d/))
  const digitsSet = new Set (digitsInput);
  return Array.from(digitsSet).slice(0,4).join('');
}

export default validateInput
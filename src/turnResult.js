const turnResult = (input, number) => {
  const inputArr = input.split('');
  const numberArr = String(number).split('');
  let bulls = 0;
  let cows = 0
  for (let i = 0; i< inputArr.length; i++) {
    if (inputArr[i] === numberArr [i]) {
      bulls++
    } else if (numberArr.includes(inputArr[i])) cows++; 
  } 
  return {bulls,cows}
}

export default turnResult
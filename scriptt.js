function generateRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 20001) - 10000); // Генеруємо числа від -10 000 до 10 000
  }
  return randomArray;
}


function sortAndTakeSix(array) {
    const startTime = new Date().getTime();
    const sortedArray = array.sort((a, b) => a - b);
    const result = sortedArray.slice(-6);
    const endTime = new Date().getTime();
    return endTime - startTime;
  }
  
  function findSixLargestElements(array) {
    const startTime = new Date().getTime();
    let largestSix = array.slice(0, 6).sort((a, b) => a - b);
  
    for (let i = 6; i < array.length; i++) {
      const current = array[i];
  
      if (current > largestSix[0]) {
        largestSix[0] = current;
        largestSix.sort((a, b) => a - b);
      }
    }
  
    const endTime = new Date().getTime();
    return endTime - startTime;
  }
  
  function findLargestAndReplace(array) {
    const startTime = new Date().getTime();
  
    for (let i = 0; i < 6; i++) {
      let maxIndex = 0;
      for (let j = 1; j < array.length; j++) {
        if (array[j] > array[maxIndex]) {
          maxIndex = j;
        }
      }
      array[maxIndex] = Number.MIN_SAFE_INTEGER;
    }
  
    const endTime = new Date().getTime();
    return endTime - startTime;
  }
  
  // Перевірка для різної кількості вхідних даних
  const inputSizes = [10000, 100000, 1000000, 10000000, 100000000];
  
  for (const size of inputSizes) {
    const randomArray = generateRandomArray(size);
  
    // Вимірюємо час для кожного алгоритму три рази
    const sortAndTakeSixTime = (sortAndTakeSix(randomArray) + sortAndTakeSix(randomArray) + sortAndTakeSix(randomArray)) / 3;
    const findSixLargestElementsTime = (findSixLargestElements(randomArray) + findSixLargestElements(randomArray) + findSixLargestElements(randomArray)) / 3;
    const findLargestAndReplaceTime = (findLargestAndReplace(randomArray) + findLargestAndReplace(randomArray) + findLargestAndReplace(randomArray)) / 3;
  
    console.log(`Input Size: ${size}`);
    console.log(`Sort and Take Six Time: ${sortAndTakeSixTime}ms`);
    console.log(`Find Six Largest Elements Time: ${findSixLargestElementsTime}ms`);
    console.log(`Find Largest and Replace Time: ${findLargestAndReplaceTime}ms`);
    console.log('------------------------');
  }
  
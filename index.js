/* Task 1: : Create a function that takes a string as input and returns the reversed version of the 
string without using the built-in reverse() method. Ex: input = "hello world" output = "dlrow olleh"
 */

// Solution 1.
function reversedString(inputString) {
  let newString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    newString += inputString.charAt(i);
  }
  return newString;
}

// console.log(reversedString("hello world"));

/* Task 2: Create a function that takes an array of numbers as input and returns the sum of 
all positive numbers in the array Ex: input = [3,-5,10,-3,7] output = 19
 */

// Solution 2.
function sumOfPositiveNumbers(array) {
  return array.reduce(
    (previous, current) => (current > 0 ? previous + current : previous + 0),
    0
  );
}

// console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));

/* Task 3: Write a JavaScript program to find the most frequent element in an array and
 return it Ex: Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] output: 3
 */

// Solution 3.
function mostFrequentNum(arr) {
  let frequencyObj = {};

  let maxUsedNum = 0;
  let maxUsed = 0;

  //   store all the duplicate element and its amount in the obj
  arr.forEach((num) => {
    frequencyObj[num] = (frequencyObj[num] || 0) + 1;
  });
  console.log(frequencyObj);
  // iterate over obj to to get most frequently used element.
  for (let num in frequencyObj) {
    if (frequencyObj[num] > maxUsed) {
      maxUsed = frequencyObj[num];
      maxUsedNum = num;
    }
  }
  return maxUsedNum;
}

// console.log(mostFrequentNum([3, 5, 2, 3, 5, 3, 1, 4, 5]));

/* Task 4:  Create a function that takes a sorted array of numbers and a target value as input. 
The function should find two numbers in the array that add up to the target value. 
Return an array containing the indices of the two numbers.
 Input: ([1, 3, 6, 8, 11, 15], 9) Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
 */

// Solution 4
function findTwoNumbers(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return `please provide an array that contains numbers to add up ${target}.`;
}

// console.log(findTwoNumbers([1, 4, 6, 9, 11, 15], 9));

/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers
 and an operator (+, -, *, /) as input and return the result of the operation.
 */

// Solution 5.
function calculate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "please provide an operator(+, -, *, /)";
  }
}
// console.log(calculate(2, 2, "*"));

/* Task 6:  Create a program that generates a random password of a specified length. 
The password should include a mix of uppercase letters, lowercase letters, numbers, 
and special characters.
 */

// Solution 6.
function getRandomPassword(len) {
  const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  const specialChars = "@!$%^_&~*#/-";
  const numbers = "0123456789";

  const allCharacters = alphabets + specialChars + numbers;

  let charactersLen = allCharacters.length;

  let password = "";
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLen);
    password += allCharacters[randomIndex];
  }
  return password;
}

// console.log(getRandomPassword(15));

/*Task 7: Implement a function that converts a Roman numeral to an integer. 
The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and
 return the corresponding integer value.
 */

// Solution 7.
function romanNumToInteger(inputValue) {
  const arr = inputValue.split("");
  const digitMapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let len = arr.length;
  let integer = 0;

  for (let i = 0; i < len; i++) {
    const currEl = arr[i];
    const nextEl = arr[i + 1];
    const currentNumber = digitMapping[currEl];
    const nextNumber = nextEl ? digitMapping[nextEl] : 0;

    if (currentNumber >= nextNumber) {
      integer += currentNumber;
    } else {
      integer -= currentNumber;
    }
  }
  return integer;
}

// console.log(romanNumToInteger("XX"));

/* Task 8:  Implement a JavaScript function to find the second smallest element in an array 
of numbers. The function should return the second smallest number.
 */

// Solution 8.
function findTheSecondSmallestNumber(arr) {
  const len = arr.length;
  let firstSmallNumber = arr[0];

  // first loop to get the first small number.
  for (let i = 1; i < len; i++) {
    if (arr[i] < firstSmallNumber) {
      firstSmallNumber = arr[i];
    }
  }

  // second loop to get the second small number
  let secondSmallNumber = arr[0];
  for (let j = 0; j < len; j++) {
    if (arr[j] === firstSmallNumber) continue;
    if (arr[j] < secondSmallNumber) {
      secondSmallNumber = arr[j];
    }
  }
  return secondSmallNumber;
}

// console.log(findTheSecondSmallestNumber([23, 4, 13, 1, -5, -15, 10, 2, -52]));

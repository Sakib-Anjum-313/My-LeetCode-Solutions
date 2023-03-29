let output = [];
var twoSum = function (nums, target) {
  nums.forEach((num1, index1) => {
    nums.forEach((num2, index2) => {
      if (num1 + num2 === target) {
        output = [index1, index2];
        return console.log(output);
      }
    });
  });
};

twoSum([3, 2, 4], 6);

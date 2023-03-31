



var removeElement = function (nums, val) {

    let i = 0, j = 0;
    
    while (j <= nums.length - 1) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i+1, nums;
};
console.log(removeElement([3, 2, 2, 3], 3));
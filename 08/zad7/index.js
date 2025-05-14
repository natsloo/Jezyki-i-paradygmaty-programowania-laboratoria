function leaveUnique(nums){
    for (let i = 1;i < nums.length;i++) {
        while (nums[i - 1] == nums[i]){
            nums.splice(i,1);
        }
    }
    return nums.length
}

let nums = [];
console.log(leaveUnique(nums));
console.log(nums.join(" "));
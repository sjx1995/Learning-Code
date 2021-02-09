/*
 * @Author: Sunly
 * @Date: 2021-01-28 10:55:36
 * @LastEditTime: 2021-01-29 19:10:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\724\main.js
 */
export const pivotIndex = (nums) => {
	if (!nums.length) return -1;
	let midIndex = 0;
	let leftSum = 0,
		rightSum = 0;
	for (let i = midIndex + 1; i < nums.length; i++) {
		rightSum += nums[i];
	}
	while (midIndex < nums.length) {
		if (leftSum === rightSum) return midIndex;
		leftSum += nums[midIndex];
		midIndex++;
		rightSum -= nums[midIndex];
	}
	return -1;
};

export const pivotIndex = (nums) => {
	if (!nums.length) return -1;
	let sum = nums.reduce((acc, cur) => acc + cur);
	let index = 0;
	let leftSum = 0;
	let rightSum = sum - nums[index];
	while (index < nums.length) {
		if (leftSum === rightSum) return index;
		leftSum += nums[index];
		index++;
		rightSum -= nums[index];
	}
	return -1;
};

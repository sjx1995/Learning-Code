/*
 * @Author: Sunly
 * @Date: 2020-11-11 15:08:22
 * @LastEditTime: 2020-11-18 19:56:42
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\53\main.js
 */
export const maxSubArray_1 = (nums) => {
	let max = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		let tempVal = 0;
		for (let j = i; j < nums.length; j++) {
			tempVal += nums[j];
			max = Math.max(tempVal, max);
		}
	}
	return max;
};

export const maxSubArray = (nums) => {
	let index = 0;
	let sum = -Infinity,
		resSum = -Infinity;
	const arr = [];
	while (index < nums.length) {
		if (sum > 0) {
			sum += nums[index];
		} else {
			sum = nums[index];
		}
		resSum = Math.max(resSum, sum);
		index++;
	}
	return resSum;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-18 11:08:35
 * @LastEditTime: 2020-12-18 11:28:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\136\main.js
 */
export const singleNumber = (nums) => {
	return nums[nums.reduce((acc, cur) => (acc ^= cur), 0)];
};

export const singleNumber = (nums) => {
	return [...new Set(nums)].reduce((acc, cur) => (acc += cur), 0) * 2 - nums.reduce((acc, cur) => (acc += cur), 0);
};

export const singleNumber = (nums) => {
	const arr = [];
	nums.forEach((n) => (arr[n] ? arr[n]-- : (arr[n] = 1)));
	return arr.indexOf(1);
};

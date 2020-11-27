/*
 * @Author: Sunly
 * @Date: 2020-11-25 17:17:10
 * @LastEditTime: 2020-11-25 17:23:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1403\main.js
 */
export const minSubsequence = (nums) => {
	nums.sort((a, b) => b - a);
	let sum = nums.reduce((acc, cur) => (acc += cur));
	let minSum = 0;
	const res = [];
	for (let i = 0; i < nums.length; i++) {
		minSum += nums[i];
		res.push(nums[i]);
		if (minSum > sum - minSum) break;
	}
	return res;
};

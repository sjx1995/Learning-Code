/*
 * @Author: Sunly
 * @Date: 2020-11-19 10:00:07
 * @LastEditTime: 2020-11-19 11:33:46
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\283\main.js
 */
export const moveZeroes = (nums) => {
	let i = 0,
		j = 0;
	while (j < nums.length) {
		if (nums[j] !== 0) {
			[nums[i], nums[j]] = [nums[j], nums[i]];
			i++;
		}
		j++;
	}
	return nums;
};

export const moveZeroes = (nums) => {
	return nums.sort((a, b) => {
		if (a === 0) return 1;
		else if (b === 0) return -1;
		else return 0;
	});
};

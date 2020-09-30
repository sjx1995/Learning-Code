/*
 * @Author: Sunly
 * @Date: 2020-09-30 16:52:04
 * @LastEditTime: 2020-09-30 18:36:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\26\main.js
 */
export const removeDuplicates_1 = (nums) => {
	let n = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[n] = nums[i];
			n++;
		}
	}
	return n;
};

export const removeDuplicates_2 = (nums) => {
	let i = 0,
		j = 1;
	while (j < nums.length) {
		if (nums[i] !== nums[j]) {
			nums[++i] = nums[j];
		}
		j++;
	}
	return ++i;
};

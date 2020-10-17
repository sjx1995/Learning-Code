/*
 * @Author: Sunly
 * @Date: 2020-09-30 18:43:16
 * @LastEditTime: 2020-09-30 18:47:14
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\1480\main.js
 */
export const runningSum = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i - 1] + nums[i];
	}
	return nums;
};

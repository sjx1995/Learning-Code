/*
 * @Author: Sunly
 * @Date: 2020-10-30 19:00:59
 * @LastEditTime: 2020-10-30 20:21:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\55\main.js
 */
export const canJump_1 = (nums) => {
	let farthest = 0;
	for (let i = 0; i < nums.length; i++) {
		if (i > farthest) {
			return false;
		}
		farthest = Math.max(farthest, i + nums[i]);
	}
	return true;
};

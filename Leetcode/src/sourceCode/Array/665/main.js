/*
 * @Author: Sunly
 * @Date: 2021-02-07 10:40:54
 * @LastEditTime: 2021-02-07 14:10:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\665\main.js
 */

export const checkPossibility = (nums) => {
	let changeCount = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] < nums[i - 1]) {
			if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
				nums[i - 1] = nums[i];
			} else {
				nums[i] = nums[i - 1];
			}
			changeCount--;
		}
	}
	return changeCount >= 0;
};

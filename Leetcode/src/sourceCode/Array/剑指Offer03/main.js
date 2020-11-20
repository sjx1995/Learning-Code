/*
 * @Author: Sunly
 * @Date: 2020-11-19 11:38:05
 * @LastEditTime: 2020-11-19 12:37:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\剑指Offer03\main.js
 */
export const findRepeatNumber = (nums) => {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			return nums[i];
		} else {
			set.add(nums[i]);
		}
	}
	return -1;
};

export const findRepeatNumber = (nums) => {
	let temp;
	for (let i = 0; i < nums.length; i++) {
		while (nums[i] !== i) {
			if (nums[i] === nums[nums[i]]) return nums[i];
			temp = nums[i];
			nums[i] = nums[temp];
			nums[temp] = temp;
		}
	}
	return -1;
};

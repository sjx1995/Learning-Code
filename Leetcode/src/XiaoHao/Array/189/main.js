/*
 * @Author: Sunly
 * @Date: 2020-09-29 11:39:05
 * @LastEditTime: 2020-09-30 14:47:45
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\189\main.js
 */

// pop and unshift

export const rotate_pop_unshift = (nums, k) => {
	let i = 0;
	let k = k % nums.length;
	while (i < k) {
		nums.unshift(nums.pop());
		i++;
	}
	return nums;
};

// 原地反转

export const rotate_inSitu = (nums, k) => {
	var n = nums.length;
	var reversePoint = n - (k % n);
	reversePoint != 0 && (nums = nums.slice(reversePoint).concat(nums.slice(0, reversePoint)));
	return nums;
};

export const rotate_splice = (nums, k) => {
	const k = k % nums.length;
	return nums.splice(0, 0, ...nums.splice(nums.length - k));
};

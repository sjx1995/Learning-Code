/*
 * @Author: Sunly
 * @Date: 2020-09-29 11:39:05
 * @LastEditTime: 2021-01-08 21:00:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\189\main.js
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

// 分段反转

export const rotate = (nums, k) => {
	const rotater = nums.splice(-(k % nums.length));
	return [...rotater.reverse(), ...nums.reverse()];
};

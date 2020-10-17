/*
 * @Author: Sunly
 * @Date: 2020-10-10 18:18:53
 * @LastEditTime: 2020-10-12 10:56:46
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1588\main.js
 */

export const sumOddLengthSubarrays_1 = (arr) => {
	let total = 0;
	for (let i = 1; i <= arr.length; i += 2) {
		for (let j = 0; j + i <= arr.length; j++) {
			total += arr.slice(j, j + i).reduce((acc, cur) => (acc += cur));
		}
	}
	return total;
};

export const sumOddLengthSubarrays = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		let left = i + 1,
			right = arr.length - i,
			left_odd = Math.floor(left / 2),
			left_even = Math.floor((left + 1) / 2),
			right_odd = Math.floor(right / 2),
			right_even = Math.floor((right + 1) / 2);
		sum += (left_odd * right_odd + left_even * right_even) * arr[i];
	}
	return sum;
};

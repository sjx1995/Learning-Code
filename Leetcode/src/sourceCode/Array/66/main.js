/*
 * @Author: Sunly
 * @Date: 2020-10-09 09:39:17
 * @LastEditTime: 2020-10-09 11:18:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\66\main.js
 */
export const plusOne_1 = (digits) => {
	let index = digits.length - 1;
	digits[index] += 1;
	while (digits[index] > 9) {
		digits[index] -= 10;
		index -= 1;
		if (index < 0) {
			digits.unshift(1);
			break;
		}
		digits[index] += 1;
	}
	return digits;
};

export const plusOne_2 = (digits) => {
	const len = digits.length;
	for (let i = len - 1; i >= 0; i--) {
		digits[i] += 1;
		digits[i] %= 10;
		if (digits[i] !== 0) {
			return digits;
		}
	}
	return [1].concat([...Array(len)].map((item) => 0));
};

export const plusOne = (digits) => {
	helper(digits, 0, digits.length - 1);
	return digits;
};

function helper(digits, start, end) {
	if (digits[end] !== 9) {
		digits[end] += 1;
		return;
	}
	digits[end] = 0;
	if (start === end) {
		digits.unshift(1);
	} else {
		helper(digits, start, end - 1);
	}
}

/*
 * @Author: Sunly
 * @Date: 2020-11-05 10:02:50
 * @LastEditTime: 2020-11-05 12:06:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Other\7\main.js
 */
export const reverse_1 = (x) => {
	const s = x.toString();
	const arr = s.split("");
	let minusSign = "";
	if (arr[0] === "-") {
		minusSign = arr.shift();
	}
	arr.reverse();
	if (minusSign === "-") {
		arr.unshift(minusSign);
	}
	const n = Number.parseInt(arr.join(""));
	if (n >= -(2 ** 31) && n <= 2 ** 31 - 1) {
		return n;
	}
	return 0;
};

export const reverse_2 = (x) => {
	const INT_MAX = 2 ** 31 - 1;
	const INT_MIN = -(2 ** 31);
	let res = 0;
	while (x !== 0) {
		const temp = x % 10;
		x = ~~(x / 10);
		if (res > (INT_MAX - temp) / 10) return 0;
		if (res < (INT_MIN - temp) / 10) return 0;
		res = res * 10 + temp;
	}
	return res;
};

export const reverse = (x) => {
	let res = 0;
	while (x !== 0) {
		res = res * 10 + (x % 10);
		x = (x / 10) | 0;
	}
	if ((res | 0) === res) {
		return res;
	}
	return 0;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-03 10:57:03
 * @LastEditTime: 2020-12-03 12:10:44
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\204\main.js
 */
export const countPrimes_1 = (n) => {
	if (n < 3) return 0;
	let res = 0;
	for (let i = 2; i < n; i++) {
		let j = 2;
		for (; j < i; j++) {
			if (i % j === 0) {
				break;
			}
		}
		if (j === i) {
			res++;
		}
	}
	return res;
};

export const countPrimes_2 = (n) => {
	if (n < 3) return 0;
	let res = 1;
	for (let i = 3; i < n; i += 2) {
		let flag = true;
		for (let j = 3; j * j <= i; j += 2) {
			if (i % j === 0) {
				flag = false;
				break;
			}
		}
		if (flag) res++;
	}
	return res;
};

export const countPrimes = (n) => {
	const isPrimes = new Array(n).fill(true);
	let res = 0;
	for (let i = 2; i < n; i++) {
		if (isPrimes[i]) {
			res++;
			for (let j = i + i; j < n; j += i) {
				isPrimes[j] = false;
			}
		}
	}
	return res;
};

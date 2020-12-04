/*
 * @Author: Sunly
 * @Date: 2020-12-03 14:18:50
 * @LastEditTime: 2020-12-03 17:43:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\50\main.js
 */
export const myPow_1 = (x, n) => {
	let res = 1;
	for (let i = 0; i < Math.abs(n); i++) {
		res *= x;
	}
	return res ** (n >= 0 ? 1 : -1);
};

export const myPow_2 = (x, n) => {
	return n >= 0 ? mul1(x, n) : 1 / mul1(x, -n);
};
const mul1 = (x, n) => {
	if (n === 0) return 1;
	let y = mul1(x, ~~(n / 2));
	return n % 2 === 0 ? y * y : y * y * x;
};

export const myPow = (x, n) => {
	return n >= 0 ? mul(x, n) : 1 / mul(x, -n);
};
const mul = (x, n) => {
	let ans = 1;
	let x_contribute = x;
	while (n > 0) {
		if (n % 2 === 1) ans *= x_contribute;
		x_contribute *= x_contribute;
		n = ~~(n / 2);
	}
	return ans;
};

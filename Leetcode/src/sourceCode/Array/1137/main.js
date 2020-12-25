/*
 * @Author: Sunly
 * @Date: 2020-12-21 17:59:20
 * @LastEditTime: 2020-12-21 19:03:59
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1137\main.js
 */
export const tribonacci = (n) => {
	const tri = [];
	(tri[0] = 0), (tri[1] = 1), (tri[2] = 1);
	for (let i = 3; i <= n; i++) {
		tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
	}
	return tri[n];
};

export const tribonacci = (n) => {
	const cache = [];
	const recursion = (n) => {
		if (cache[n]) return cache[n];
		if (n === 0) return 0;
		if (n === 1) return 1;
		if (n === 2) return 1;
		cache[n] = recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
		return cache[n];
	};
	return recursion(n);
};

export const tribonacci = (n, r1 = 0, r2 = 1, r3 = 1) => {
	if (n <= 0) return r1;
	return tribonacci(n - 1, r2, r3, r1 + r2 + r3);
};

export const tribonacci = (n) => {
	if (n === 0) return 0;
	if (n === 1 || n === 2) return 1;
	return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

// T(n) = 2 * T(n-1) - T(n-4)

export const tribonacci = (n) => {
	if (n === 0) return 0;
	if (n === 1 || n === 2) return 1;
	if (n === 3) return 2;
	return 2 * tribonacci(n - 1) - tribonacci(n - 4);
};

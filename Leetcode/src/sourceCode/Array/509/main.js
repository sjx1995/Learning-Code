/*
 * @Author: Sunly
 * @Date: 2020-12-16 14:30:01
 * @LastEditTime: 2020-12-16 16:00:56
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\509\main.js
 */
// 0 1 1 2 3 5 8 13 21
export const fib = (n) => {
	return recursion(n);
};

const recursion = (n) => {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return recursion(n - 1) + recursion(n - 2);
};

export const fib = (n) => {
	if (n <= 1) return n;
	return fib(n - 1) + fib(n - 2);
};

export const fib = (n) => {
	return (1 / Math.sqrt(5)) * (((1 + Math.sqrt(5)) / 2) ** n - ((1 - Math.sqrt(5)) / 2) ** n);
};

export const fib = (n) => {
	if (n <= 1) return n;
	const cache = [0, 1];
	for (let i = 2; i <= n; i++) {
		cache[i] = cache[i - 1] + cache[i - 2];
	}
	return cache[cache.length - 1];
};

export const fib = (n) => {
	if (n <= 1) return n;
	const cache = [0, 1];
	const memorize = (n) => {
		if (cache[n] != null) return cache[n];
		cache[n] = memorize(n - 1) + memorize(n - 2);
		return memorize(n);
	};
	return memorize(n);
};

export const fib = (n) => {
	if (n <= 1) return n;
	let cur = 1,
		pre1 = 1,
		pre2 = 0;
	for (let i = 2; i <= n; i++) {
		cur = pre1 + pre2;
		pre2 = pre1;
		pre1 = cur;
	}
	return cur;
};

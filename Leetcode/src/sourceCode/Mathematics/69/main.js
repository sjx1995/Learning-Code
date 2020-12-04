/*
 * @Author: Sunly
 * @Date: 2020-12-02 18:22:29
 * @LastEditTime: 2020-12-02 19:04:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\69\main.js
 */
export const mySqrt_1 = (x) => {
	let start = 0,
		end = x;
	let res = 0;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (mid * mid <= x) (start = mid + 1) && (res = mid);
		else end = mid - 1;
	}
	return res;
};

export const mySqrt = (x) => {
	let xn = x;
	while (xn * xn > x) {
		xn = ~~((xn * xn + x) / (2 * xn));
	}
	return xn;
};

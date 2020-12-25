/*
 * @Author: Sunly
 * @Date: 2020-12-21 17:51:42
 * @LastEditTime: 2020-12-21 17:55:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\70\main.js
 */
export const climbStairs = (n) => {
	const res = [];
	res[0] = res[1] = 1;
	for (let i = 2; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}
	return res[n];
};

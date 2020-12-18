/*
 * @Author: Sunly
 * @Date: 2020-12-15 14:30:07
 * @LastEditTime: 2020-12-15 14:32:21
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1374\main.js
 */
export const generateTheString = (n) => {
	return n % 2 === 0 ? "a".repeat(n - 1) + "b" : "a".repeat(n);
};

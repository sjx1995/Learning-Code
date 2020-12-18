/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:23:00
 * @LastEditTime: 2020-12-15 15:26:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\剑指Offer58-II\main.js
 */
export const reverseLeftWords = (s, n) => {
	const k = n % s.length;
	return s.substring(k) + s.substring(0, k);
};

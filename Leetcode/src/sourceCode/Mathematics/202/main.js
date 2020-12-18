/*
 * @Author: Sunly
 * @Date: 2020-12-17 17:50:09
 * @LastEditTime: 2020-12-17 17:57:18
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\202\main.js
 */
export const isHappy = (n, o = n) => {
	let cur = n
		.toString()
		.split("")
		.reduce((acc, cur) => (acc += cur * cur), 0);
	return cur === 1 ? true : cur === n ? false : isHappy(cur, o);
};

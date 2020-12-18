/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:52:33
 * @LastEditTime: 2020-12-15 15:55:17
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1221\main.js
 */
export const balancedStringSplit = (s) => {
	let height = 0,
		count = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "L") height++;
		else if (s[i] === "R") height--;
		if (height === 0) count++;
	}
	return count;
};

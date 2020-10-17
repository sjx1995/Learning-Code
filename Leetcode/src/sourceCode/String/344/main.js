/*
 * @Author: Sunly
 * @Date: 2020-10-15 18:52:54
 * @LastEditTime: 2020-10-15 18:55:39
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\344\main.js
 */
export const reverseString = (s) => {
	let l = 0,
		r = s.length - 1;
	while (l < r) {
		[s[l], s[r]] = [s[r], s[l]];
	}
	return s;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-15 14:57:31
 * @LastEditTime: 2020-12-15 14:59:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1614\main.js
 */
export const maxDepth = (s) => {
	let dep = 0;
	let maxDep = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			dep += 1;
			maxDep = Math.max(maxDep, dep);
		} else if (s[i] === ")") {
			dep -= 1;
		}
	}
	return maxDep;
};

/*
 * @Author: Sunly
 * @Date: 2021-01-13 20:43:04
 * @LastEditTime: 2021-01-15 10:27:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1190\main.js
 */
export const reverseParentheses = (s) => {
	let curDep = 0;
	const arr = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			if (curDep % 2 !== 0) arr[arr.length - 1].split("").reverse().join("");
			curDep++;
			arr.push("");
		} else if (s[i] === ")") {
			if (curDep % 2 !== 0) arr[arr.length - 1].split("").reverse().join("");
			curDep--;
			arr.push("");
		} else {
			arr[arr.length - 1] += s[i];
		}
	}
	return arr.join("");
};

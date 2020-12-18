/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:14:12
 * @LastEditTime: 2020-12-15 15:20:47
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1678\main.js
 */
export const interpret = (command) => {
	let i = 0;
	let res = "";
	while (i < command.length) {
		if (command[i] === "G") {
			res += "G";
			i++;
		} else if (command[i] === "(" && command[i + 1] === ")") {
			res += "o";
			i += 2;
		} else {
			res += "al";
			i += 4;
		}
	}
	return res;
};

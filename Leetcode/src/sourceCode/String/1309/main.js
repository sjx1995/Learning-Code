/*
 * @Author: Sunly
 * @Date: 2020-12-15 17:42:50
 * @LastEditTime: 2020-12-15 17:47:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1309\main.js
 */
export const freqAlphabets = (s) => {
	let res = "";
	let i = 0;
	while (i < s.length) {
		if (s[i + 2] === "#") {
			res += String.fromCharCode(Number(s[i] + s[i + 1]) + 96);
			i += 3;
		} else {
			res += String.fromCharCode(Number(s[i]) + 96);
			i++;
		}
	}
	return res;
};

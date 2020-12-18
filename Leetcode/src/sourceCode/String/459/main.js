/*
 * @Author: Sunly
 * @Date: 2020-12-14 18:03:09
 * @LastEditTime: 2020-12-14 18:29:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\459\main.js
 */
export const repeatedSubstringPattern = (s) => {
	for (let i = 1; i <= s.length / 2; i++) {
		if (s.length % i !== 0) continue;
		const repeatedString = s.substring(0, i).repeat(s.length / i);
		if (repeatedString === s) return true;
	}
	return false;
};

export const repeatedSubstringPattern = (s) => {
	const doubleStr = s + s;
	for (let i = 1; i < s.length; i++) {
		const rotateStr = doubleStr.substring(i, s.length + i);
		if (rotateStr === s) return true;
	}
	return false;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-19 14:32:03
 * @LastEditTime: 2020-11-19 14:57:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\剑指Offer05\main.js
 */
export const replaceSpace = (s) => {
	return s.replaceAll(" ", "%20");
};

export const replaceSpace = (s) => {
	return s.replaceAll(/ /g, "%20");
};

export const replaceSpace = (s) => {
	const arr = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === " ") arr.push("%20");
		else arr.push(s[i]);
	}
	return arr.join("");
};

export const replaceSpace = (s) => {
	let replaceString = "";
	let i = 0;
	while (i < s.length) {
		replaceString += s[i] === " " ? "%20" : s[i];
		i++;
	}
	return replaceString;
};

export const replaceSpace = (s) => {
	return s.split(" ").join("%20");
};

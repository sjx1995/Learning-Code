/*
 * @Author: Sunly
 * @Date: 2020-12-15 16:51:04
 * @LastEditTime: 2020-12-15 17:17:59
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\709\main.js
 */
export const toLowerCase = (str) => {
	return str.toLocaleLowerCase();
};

export const toLowerCase = (str) => {
	return str
		.split("")
		.map((t) => (t.charCodeAt() >= 65 && t.charCodeAt() <= 90 ? String.fromCodePoint(t.charCodeAt() + 32) : t))
		.join("");
};

export const toLowerCase = (str) => {
	return str.replaceAll(/[A-Z]/g, (t) => String.fromCodePoint(t.charCodeAt() + 32));
};

export const toLowerCase = (str) => {
	return str
		.split("")
		.map((t) => String.fromCodePoint(t.charCodeAt() | 32))
		.join("");
};

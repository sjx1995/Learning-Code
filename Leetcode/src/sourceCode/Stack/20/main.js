/*
 * @Author: Sunly
 * @Date: 2020-11-06 16:26:35
 * @LastEditTime: 2020-11-06 17:25:44
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Stack\20\main.js
 */
export const isValid_1 = (s) => {
	const queue = [];
	for (let i = 0; i < s.length; i++) {
		if (
			(s[i] === ")" && queue[queue.length - 1] === "(") ||
			(s[i] === "]" && queue[queue.length - 1] === "[") ||
			(s[i] === "}" && queue[queue.length - 1] === "{")
		) {
			queue.pop();
		} else if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
			queue.push(s[i]);
		} else {
			return false;
		}
	}
	return queue.length === 0;
};

export const isValid = (s) => {
	const queue = [];
	const map = new Map();
	map.set(")", "(");
	map.set("}", "{");
	map.set("]", "[");
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			if (map.get(s[i]) === queue[queue.length - 1]) {
				queue.pop();
			} else {
				return false;
			}
		} else {
			queue.push(s[i]);
		}
	}
	return queue.length === 0;
};

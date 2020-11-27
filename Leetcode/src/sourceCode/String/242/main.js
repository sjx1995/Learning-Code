/*
 * @Author: Sunly
 * @Date: 2020-11-23 12:15:55
 * @LastEditTime: 2020-11-23 12:36:05
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\242\main.js
 */
export const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const letters = new Array(26).fill(0);
	for (let i = 0; i < s.length; i++) {
		letters[s[i].charCodeAt() - 97]++;
	}
	for (let i = 0; i < t.length; i++) {
		if (--letters[t[i].charCodeAt() - 97] < 0) return false;
	}
	return true;
};

export const isAnagram = (s, t) => {
	return s.length === t.length && s.split("").sort().join("") === t.split("").sort().join("");
};

export const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	const map = new Map();
	for (let i = 0; i < s.length; i++) {
		map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
	}
	for (let i = 0; i < t.length; i++) {
		if (map.get(t[i]) && map.get(t[i]) - 1 >= 0) {
			map.set(t[i], map.get(t[i]) - 1);
		} else {
			return false;
		}
	}
	return true;
};

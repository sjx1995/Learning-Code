/*
 * @Author: Sunly
 * @Date: 2020-10-15 19:01:39
 * @LastEditTime: 2020-10-15 19:54:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\387\main.js
 */
export const firstUniqChar_1 = (s) => {
	const map = new Map();
	for (const character of s) {
		if (map.has(character)) {
			map.set(character, map.get(character) + 1);
		} else {
			map.set(character, 1);
		}
	}
	for (let i = 0; i < s.length; i++) {
		if (map.get(s[i]) === 1) {
			return i;
		}
	}
	return -1;
};

export const firstUniqChar_2 = (s) => {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return i;
		}
	}
	return -1;
};

export const firstUniqChar = (s) => {
	let charArr = new Array(26).fill(0);
	for (const character of s) {
		charArr[character.charCodeAt() - 97]++;
	}
	for (let i = 0; i < s.length; i++) {
		if (charArr[s[i].charCodeAt() - 97] === 1) {
			return i;
		}
	}
	return -1;
};

/*
 * @Author: Sunly
 * @Date: 2020-10-15 19:01:39
 * @LastEditTime: 2020-12-23 10:43:48
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

export const firstUniqChar = (s) => {
	const queue = [];
	const map = new Map();
	Array.prototype.forEach.call(s, (ch, i) => {
		if (map.has(ch)) {
			if (map.get(ch)[1] !== -1) map.set(ch, -1);
			while (queue.length && map.get(queue[0][0]) === -1) queue.shift();
		} else {
			queue.push([ch, i]);
			map.set(ch, i);
		}
	});
	return queue.length ? queue[0][1] : -1;
};

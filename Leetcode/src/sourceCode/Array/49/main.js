/*
 * @Author: Sunly
 * @Date: 2020-12-14 11:24:37
 * @LastEditTime: 2020-12-14 12:13:43
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\49\main.js
 */
export const groupAnagrame = (strs) => {
	const map = new Map();
	strs.forEach((item) => {
		const letterArr = new Array(26);
		Array.prototype.forEach.call(item, (letter) => {
			letterArr[letter.charCodeAt() - 97]
				? letterArr[letter.charCodeAt() - 97]++
				: (letterArr[letter.charCodeAt() - 97] = 1);
		});
		map.has(JSON.stringify(letterArr))
			? map.set(JSON.stringify(letterArr), [...map.get(JSON.stringify(letterArr)), item])
			: map.set(JSON.stringify(letterArr), [item]);
	});
	const res = [];
	for (const [key, val] of map) {
		res.push(val);
	}
	return res;
};

export const groupAnagrame = (strs) => {
	const map = {};
	strs.forEach((item) => {
		const letters = new Array(26).fill(0);
		Array.prototype.forEach.call(item, (letter) => letters[letter.charCodeAt() - 97]++);
		map[letters] ? map[letters].push(item) : (map[letters] = [item]);
	});
	return Object.values(map);
};

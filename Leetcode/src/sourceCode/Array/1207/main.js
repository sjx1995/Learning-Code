/*
 * @Author: Sunly
 * @Date: 2020-10-28 17:58:22
 * @LastEditTime: 2020-10-28 18:12:15
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1207\main.js
 */
export const uniqueOccurrences = (arr) => {
	let map = new Map();
	arr.forEach((item) => {
		map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
	});
	let set = new Set();
	for (const item of map) {
		if (set.has(item[1])) {
			return false;
		} else {
			set.add(item[1]);
		}
	}
	return true;
};

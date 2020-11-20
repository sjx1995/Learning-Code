/*
 * @Author: Sunly
 * @Date: 2020-11-20 14:55:28
 * @LastEditTime: 2020-11-20 15:47:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1287\main.js
 */
export const findSpecialInteger = (arr) => {
	const map = new Map();
	for (let i = 0; i < arr.length; i++) {
		if (map.has(arr[i])) {
			map.set(arr[i], map.get(arr[i]) + 1);
			if (map.get(arr[i]) > arr.length * 0.25) return arr[i];
		} else {
			map.set(arr[i], 1);
		}
	}
	return -1;
};

export const findSpecialInteger = (arr) => {
	let slow = 0,
		fast = ~~(arr.length * 0.25);
	while (fast < arr.length) {
		if (arr[slow] === arr[fast]) return arr[slow];
		slow++;
		fast++;
	}
	return -1;
};

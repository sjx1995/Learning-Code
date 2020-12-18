/*
 * @Author: Sunly
 * @Date: 2020-12-18 17:00:45
 * @LastEditTime: 2020-12-18 17:53:01
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\260\main.js
 */
export const singleNumber = (nums) => {
	const map = new Map();
	nums.forEach((item) => map.set(item, map.has(item) ? map.get(item) + 1 : 1));
	const res = [];
	for (const [k, v] of map) {
		if (v === 1) res.push(k);
	}
	return res;
};

export const singleNumber = (nums) => {
	let bitMask = 0;
	for (let i = 0; i < nums.length; i++) {
		bitMask ^= nums[i];
	}
	let diff = bitMask & -bitMask;
	let x = 0;
	for (let i = 0; i < nums.length; i++) {
		if ((nums[i] & diff) !== 0) x ^= nums[i];
	}
	return [x, bitMask ^ x];
};

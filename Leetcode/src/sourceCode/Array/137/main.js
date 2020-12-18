/*
 * @Author: Sunly
 * @Date: 2020-12-18 14:21:11
 * @LastEditTime: 2020-12-18 16:10:13
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\137\main.js
 */
export const singleNumber_1 = (nums) => {
	return (
		([...new Set(nums)].reduce((acc, cur) => (acc += cur), 0) * 3 - nums.reduce((acc, cur) => (acc += cur), 0)) / 2
	);
};

export const singleNumber = (nums) => {
	const map = new Map();
	nums.forEach((t) => map.set(t, map.has(t) ? map.get(t) + 1 : 1));
	for (const [k, v] of map) {
		if (v === 1) return k;
	}
};

export const singleNumber = (nums) => {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		let dig = 0;
		for (let j = 0; j < nums.length; j++) {
			if ((nums[j] >> i) & 1) dig++;
		}
		res |= dig % 3 << i;
	}
	return res;
};

export const singleNumber = (nums) => {
	let one = 0,
		two = 0;
	for (let i = 0; i < nums.length; i++) {
		one = (one ^ nums[i]) & ~two;
		two = (two ^ nums[i]) & ~one;
	}
	return one;
};

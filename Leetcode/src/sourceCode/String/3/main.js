/*
 * @Author: Sunly
 * @Date: 2020-10-13 14:06:37
 * @LastEditTime: 2020-10-14 14:17:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\3\main.js
 */
export const lengthOfLongestSubstring_1 = (s) => {
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		let hashSet = new Set();
		let j = i;
		for (; j < s.length; j++) {
			if (hashSet.has(s[j])) {
				break;
			}
			hashSet.add(s[j]);
		}
		if (max < j - i) {
			max = j - i;
		}
	}
	return max;
};

export const lengthOfLongestSubstring_2 = (s) => {
	const hashSet = new Set();
	let l = 0,
		r = -1;
	let max = 0;
	while (l < s.length) {
		if (l !== 0) {
			hashSet.delete(s.charAt(l - 1));
		}
		while (r < s.length - 1 && !hashSet.has(s.charAt(r + 1))) {
			hashSet.add(s.charAt(r + 1));
			r++;
		}
		max = Math.max(max, r - l + 1);
		l++;
	}
	return max;

	// const hashSet = new Set();
	// let l = 0,
	// 	r = -1;
	// let max = 0;
	// for (; l < s.length; l++) {
	// 	if (l !== 0) {
	// 		hashSet.delete(s.charAt(l - 1));
	// 	}
	// 	while (r < s.length - 1 && !hashSet.has(s.charAt(r + 1))) {
	// 		hashSet.add(s.charAt(r + 1));
	// 		r++;
	// 	}
	// 	max = Math.max(max, r - l + 1);
	// }
	// return max;
};

// 使用map数据结构保存 {数字:下标}
export const lengthOfLongestSubstring = (s) => {
	const map = new Map();
	let l = 0,
		r = 0;
	let max = 0;
	for (; r < s.length; r++) {
		if (map.has(s[r])) {
			l = Math.max(map.get(s[r]) + 1, l);
		}
		map.set(s[r], r);
		max = Math.max(max, r - l + 1);
	}
	return max;
};

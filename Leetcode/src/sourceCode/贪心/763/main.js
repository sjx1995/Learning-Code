/*
 * @Author: Sunly
 * @Date: 2020-10-28 18:26:58
 * @LastEditTime: 2020-10-29 12:16:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\763\main.js
 */
export const partitionLabels = (S) => {
	let map = new Map();
	const res = [];
	for (let i = 0; i < S.length; i++) {
		map.set(S[i], i);
	}
	for (let cur = 0, partitionStart = 0, partitionEnd = 0; cur < S.length; cur++) {
		partitionEnd = Math.max(map.get(S[cur]), partitionEnd);
		if (partitionEnd === cur) {
			res.push(partitionEnd - partitionStart + 1);
			partitionStart = partitionEnd + 1;
		}
	}
	return res;
};

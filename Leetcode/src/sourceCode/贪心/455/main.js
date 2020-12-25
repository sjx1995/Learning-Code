/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:06:22
 * @LastEditTime: 2020-12-25 10:39:18
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\455\main.js
 */

export const findContentChildren = (g, s) => {
	const children = g.sort((a, b) => a - b);
	const bitcuites = s.sort((a, b) => a - b);
	let res = 0;
	let cIdx = 0,
		bIdx = 0;
	while (cIdx < children.length && bIdx < bitcuites.length) {
		if (bitcuites[bIdx] >= children[cIdx]) {
			bIdx++;
			cIdx++;
			res++;
		} else {
			bIdx++;
		}
	}
	return res;
};

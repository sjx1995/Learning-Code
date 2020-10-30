/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:06:22
 * @LastEditTime: 2020-10-30 18:16:23
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\455\main.js
 */
export const findContentChildren = (g, s) => {
	const children = g.sort((a, b) => a - b);
	const bisbuits = s.sort((a, b) => a - b);
	let c = 0,
		b = 0;
	let res = 0;
	while (c < children.length && b < bisbuits.length) {
		if (children[c] <= bisbuits[b]) {
			b++;
			c++;
			res++;
		} else {
			b++;
		}
	}
	return res;
};

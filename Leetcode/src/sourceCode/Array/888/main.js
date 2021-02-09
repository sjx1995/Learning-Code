/*
 * @Author: Sunly
 * @Date: 2021-02-01 10:44:41
 * @LastEditTime: 2021-02-02 11:03:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\888\main.js
 */
export const fairCandySwap = (A, B) => {
	const sumA = A.reduce((acc, cur) => acc + cur);
	const sumB = B.reduce((acc, cur) => acc + cur);
	const temp = ~~((sumA - sumB) / 2);
	const set = new Set(A);
	for (const y of B) {
		const x = y + temp;
		if (set.has(x)) return [x, y];
	}
};

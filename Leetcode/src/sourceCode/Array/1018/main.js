/*
 * @Author: Sunly
 * @Date: 2021-01-14 11:06:44
 * @LastEditTime: 2021-01-14 14:11:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1018\main.js
 */
export const prefixesDivBy5 = (A) => {
	const res = [];
	let pre = 0;
	for (let i = 0; i < A.length; i++) {
		pre = ((pre << 1) + A[i]) % 5;
		res.push(pre);
	}
	return res;
};

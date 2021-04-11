/*
 * @Author: Sunly
 * @Date: 2021-03-29 11:11:53
 * @LastEditTime: 2021-03-29 14:35:40
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\190\main.js
 */
export const reverseBits = n => {
	let res = 0;
	for (let i = 0; i < 32; i++) {
		res = (res << 1) + (n & 1);
		n >>> 1;
	}
	return res;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-10 19:04:25
 * @LastEditTime: 2020-12-10 19:29:56
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\38\main.js
 */
export const countAndSay = (n) => {
	let res = "1";
	for (let i = 1; i < n; i++) {
		let start = 0,
			end = 0;
		let item = "";
		while (start < res.length && end < res.length) {
			if (res[start] === res[end + 1]) {
				end++;
			} else {
				item += end - start + 1;
				item += res[start];
				start = end + 1;
				end = start;
			}
		}
		res = item;
	}
	return res;
};

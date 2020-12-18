/*
 * @Author: Sunly
 * @Date: 2020-12-14 16:17:39
 * @LastEditTime: 2020-12-14 16:53:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\面试题01.06\main.js
 */
export const compressString = (S) => {
	let l = 0,
		r = 0;
	let res = "";
	while (l < S.length) {
		if (S[r + 1] === S[r]) {
			r++;
		} else {
			res += S[r] + (r - l + 1);
			l = r + 1;
			r = l;
		}
	}
	return res.length < S.length ? res : S;
};

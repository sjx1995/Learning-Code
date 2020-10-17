/*
 * @Author: Sunly
 * @Date: 2020-10-10 17:59:37
 * @LastEditTime: 2020-10-10 18:12:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\977\main.js
 */

export const sortedSquares_1 = (A) => {
	return A.map((item) => Math.pow(item, 2)).sort((a, b) => a - b);
};

export const sortedSquares = (A) => {
	let l = 0,
		r = A.length - 1;
	let res = [];
	while (l <= r) {
		if (Math.abs(A[l]) > Math.abs(A[r])) {
			res.unshift(Math.pow(A[l], 2));
			l++;
		} else {
			res.unshift(Math.pow(A[r], 2));
			r--;
		}
	}
	return res;
};

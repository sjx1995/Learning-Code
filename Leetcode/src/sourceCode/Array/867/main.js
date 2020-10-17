/*
 * @Author: Sunly
 * @Date: 2020-09-29 19:10:10
 * @LastEditTime: 2020-09-30 13:52:11
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\867\main.js
 */

// 转置矩阵

export const transpose = (A) => {
	let b = [];
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			!b[j] ? (b[j] = []) : null;
			b[j][i] = A[i][j];
		}
	}
	return b;
};

export const transpose_2 = (A) => {
	let b = new Array(A[0].length).fill(0).map((item) => []);
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < A[i].length; j++) {
			b[j].push(A[i][j]);
		}
	}
	return b;
};

export const transpose_3 = (A) => {
	return Array.from({ length: A[0].length }, (_v, i) =>
		A.map((v) => {
			console.log("_v, i, v", _v, i, v);
			return v[i];
		})
	);
};

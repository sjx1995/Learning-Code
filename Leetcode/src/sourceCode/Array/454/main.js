/*
 * @Author: Sunly
 * @Date: 2020-11-27 10:36:46
 * @LastEditTime: 2020-11-27 11:16:01
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\454\main.js
 */
export const fourSumCount = (A, B, C, D) => {
	let res = 0;
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			for (let k = 0; k < C.length; k++) {
				for (let l = 0; l < D.length; l++) {
					if (A[i] + B[j] + C[k] + D[l] === 0) {
						res++;
					}
				}
			}
		}
	}
	return res;
};

export const fourSumCount = (A, B, C, D) => {
	const map = new Map();
	for (let a = 0; a < A.length; a++) {
		for (let b = 0; b < B.length; b++) {
			map.set(A[a] + B[b], map.has(A[a] + B[b]) ? map.get(A[a] + B[b]) + 1 : 1);
		}
	}
	let res = 0;
	for (let c = 0; c < C.length; c++) {
		for (let d = 0; d < D.length; d++) {
			map.has(-(C[c] + D[d])) ? (res += map.get(-(C[c] + D[d]))) : null;
		}
	}
	return res;
};

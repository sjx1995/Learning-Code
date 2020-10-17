/*
 * @Author: Sunly
 * @Date: 2020-10-12 13:57:01
 * @LastEditTime: 2020-10-12 14:33:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\832\main.js
 */
export const flipAndInvertImage_1 = (A) => {
	return A.map((row) => row.reverse().map((rowEle) => +!rowEle));
};

export const flipAndInvertImage = (A) => {
	for (let i = 0; i < A.length; i++) {
		let l = 0,
			r = A[0].length - 1;
		while (l < r) {
			if (A[i][l] === A[i][r]) {
				A[i][l] = 1 ^ A[i][l];
				A[i][r] = 1 ^ A[i][r];
			}
			l++;
			r--;
		}
		if (l === r) {
			A[i][l] = 1 ^ A[i][l];
		}
	}
	return A;
};

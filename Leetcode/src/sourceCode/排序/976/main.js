/*
 * @Author: Sunly
 * @Date: 2020-11-25 16:30:26
 * @LastEditTime: 2020-11-25 16:33:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\976\main.js
 */
export const largestPerimeter = (A) => {
	A.sort((a, b) => b - a);
	for (let i = 0; i < A.length - 2; i++) {
		if (A[i] < A[i + 1] + A[i + 2]) return A[i] + A[i + 1] + A[i + 2];
	}
	return 0;
};

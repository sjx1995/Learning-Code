/*
 * @Author: Sunly
 * @Date: 2020-11-20 15:54:50
 * @LastEditTime: 2020-11-20 16:07:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1572\main.js
 */
export const diagonalSum = (mat) => {
	let left = 0,
		right = mat[0].length - 1;
	let sum = 0;
	for (let i = 0; i < mat.length; i++) {
		sum += mat[i][left] + mat[i][right];
		left++;
		right--;
	}
	if (left % 2) sum -= mat[(left - 1) / 2][(left - 1) / 2];
	return sum;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-22 14:29:40
 * @LastEditTime: 2020-12-22 15:06:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\剑指Offer04\main.js
 */
export const findNumberIn2DArray = (matrix, target) => {
	if (!matrix.length || !matrix[0].length) return false;
	let start, end;
	for (let i = 0; i < matrix.length; i++) {
		start = 0;
		end = matrix[0].length - 1;
		if (matrix[i][start] > target) return false;
		if (matrix[i][start] <= target && matrix[i][end] >= target) {
			while (start <= end) {
				const mid = ~~((start + end) / 2);
				if (matrix[i][mid] === target) return true;
				else if (matrix[i][mid] > target) end = mid - 1;
				else if (matrix[i][mid] < target) start = mid + 1;
			}
		}
	}
	return false;
};

export const findNumberIn2DArray = (matrix, target) => {
	if (!matrix.length || !matrix[0].length) return false;
	let row = 0,
		column = matrix[0].length - 1;
	while (row < matrix.length && column >= 0) {
		const cur = matrix[row][column];
		if (cur === target) return true;
		else if (cur < target) row++;
		else if (cur > target) column--;
	}
	return false;
};

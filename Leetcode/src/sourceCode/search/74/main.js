/*
 * @Author: Sunly
 * @Date: 2021-03-30 11:52:57
 * @LastEditTime: 2021-03-30 15:09:15
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\74\main.JS
 */
const searchMatrix_1 = (matrix, target) => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === target) return true;
		}
	}
	return false;
};

const searchMatrix_2 = (matrix, target) => {
	let row = 0,
		column = matrix[0].length - 1;
	while (row < matrix.length && matrix[row][column] < target) {
		row++;
	}
	if (row >= matrix.length) return false;
	while (column >= 0 && matrix[row][column] >= target) {
		if (matrix[row][column] === target) return true;
		column--;
	}
	return false;
};

const searchMatrix_3 = (matrix, target) => {
	let row = 0,
		column = matrix[0].length - 1;
	while (row < matrix.length && column > 0) {
		if (target > matrix[row][column]) row++;
		else if (target > matrix[row][column]) column--;
		else return true;
	}
	return false;
};

const searchMatrix_4 = (matrix, target) => {
	let row = 0,
		column = matrix[0].length - 1;
	while (row < matrix.length && target > matrix[row][column]) row++;
	if (row >= matrix.length) return false;
	let start = 0,
		end = column;
	while (start <= end) {
		let m = ~~((start + end) / 2);
		if (matrix[row][m] === target) return true;
		else if (matrix[row][m] > target) end = m - 1;
		else if (matrix[row][m] < target) start = m + 1;
	}
	return false;
};

const searchMatrix = (matrix, target) => {
	const row = matrix.length;
	const column = matrix[0].length;
	let start = 0,
		end = row * column - 1;
	while (start <= end) {
		let mid = ~~((start + end) / 2);
		let midNum = matrix[~~(mid / column)][~~(mid % column)];
		if (midNum === target) return true;
		else if (midNum > target) end = mid - 1;
		else if (midNum < target) start = mid + 1;
	}
	return false;
};

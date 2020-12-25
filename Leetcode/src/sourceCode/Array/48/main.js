/*
 * @Author: Sunly
 * @Date: 2020-12-19 10:35:39
 * @LastEditTime: 2020-12-21 10:36:48
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\48\main.js
 */
export const rotate = (matrix) => {
	if (!matrix.length || matrix.length === 1) return matrix;
	const matrixWidth = matrix.length;
	let tx = 0,
		ty = 0;
	let rx = 0,
		ry = matrixWidth - 1;
	let bx = matrixWidth - 1,
		by = matrixWidth - 1;
	let lx = matrixWidth - 1,
		ly = 0;
	for (let i = 0; i < ~~(matrixWidth / 2); ) {
		for (let j = 0; j < matrixWidth - i * 2 - 1; j++) {
			const temp = matrix[tx][ty];
			matrix[tx][ty] = matrix[lx][ly];
			matrix[lx][ly] = matrix[bx][by];
			matrix[bx][by] = matrix[rx][ry];
			matrix[rx][ry] = temp;
			ty++;
			rx++;
			by--;
			lx--;
		}
		tx++;
		ry--;
		bx--;
		ly++;
		i++;
		ty = i;
		rx = i;
		by = matrixWidth - 1 - i;
		lx = matrixWidth - 1 - i;
	}
	return matrix;
};

export const rotate = (matrix) => {
	for (let i = 0; i < ~~(matrix.length / 2); i++) {
		[matrix[i], matrix[matrix.length - 1 - i]] = [matrix[matrix.length - 1 - i], matrix[i]];
	}
	for (let i = 0; i < matrix.length - 1; i++) {
		for (let j = i + 1; j < matrix.length; j++) {
			[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
		}
	}
	return matrix;
};

export const rotate = (matrix) => {
	const n = matrix.length;
	for (let i = 0; i < Math.floor(n / 2); ++i) {
		for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
			const temp = matrix[i][j];
			matrix[i][j] = matrix[n - j - 1][i];
			matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
			matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
			matrix[j][n - i - 1] = temp;
		}
	}
};

/*
 * @Author: Sunly
 * @Date: 2021-02-09 18:49:12
 * @LastEditTime: 2021-02-09 19:38:01
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\36\main.js
 */
export const isValidSudoku = (board) => {
	for (let i = 0; i < 9; i++) {
		const set = new Set();
		for (let j = 0; j < 9; j++) {
			if (set.has(board[i][j])) {
				return false;
			} else if (board[i][j] !== ".") {
				set.add(board[i][j]);
			}
		}
	}
	for (let i = 0; i < 9; i++) {
		const set = new Set();
		for (let j = 0; j < 9; j++) {
			if (set.has(board[j][i])) {
				return false;
			} else if (board[j][i] !== ".") {
				set.add(board[j][i]);
			}
		}
	}
	for (let row = 0; row < 7; row += 3) {
		for (let col = 0; col < 7; col += 3) {
			const set = new Set();
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 3; j++) {
					if (set.has(board[i + row][j + col])) {
						return false;
					} else if (board[i + row][j + col] !== ".") {
						set.add(board[i + row][j + col]);
					}
				}
			}
		}
	}
	return true;
};

export const isValidSudoku = (board) => {
	const row = new Array(9);
	const col = new Array(9);
	const cell = new Array(9);
	for (let i = 0; i < 9; i++) {
		row[i] = new Array(9).fill(0);
		col[i] = new Array(9).fill(0);
		cell[i] = new Array(9).fill(0);
	}
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] !== ".") {
				const number = board[i][j] - 1;
				if (row[i][number] !== 0) return false;
				else row[i][number] = 1;
				if (col[j][number] !== 0) return false;
				else col[j][number] = 1;
				if (cell[~~(i / 3) * 3 + ~~(j / 3)][number] !== 0) return false;
				else cell[~~(i / 3) * 3 + ~~(j / 3)][number] = 1;
			}
		}
	}
	return true;
};

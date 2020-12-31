/*
 * @Author: Sunly
 * @Date: 2020-12-30 18:08:09
 * @LastEditTime: 2020-12-30 18:37:16
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\200\main.js
 */
export const numIsLands = (grid) => {
	let count = 0;
	const change = (i, j) => {
		if (grid[i][j] === "0") return;
		grid[i][j] = "2";
		if (j < grid[0].length - 1) change(i, j + 1);
		if (j > 0) change(i, j - 1);
		if (i < grid.length - 1) change(i + 1, j);
		if (i > 0) change(i - 1, j);
	};
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				change(i, j);
				count++;
			}
		}
	}
	return count;
};

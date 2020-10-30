/*
 * @Author: Sunly
 * @Date: 2020-10-30 20:30:47
 * @LastEditTime: 2020-10-30 21:03:54
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\463\main.js
 */
export const islandPerimeter = (grid) => {
	const dx = [0, 1, 0, -1];
	const dy = [1, 0, -1, 0];
	let ans = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j]) {
				for (let k = 0; k < 4; k++) {
					let ix = dx[k] + i;
					let iy = dy[k] + j;
					if (ix < 0 || ix >= grid.length || iy < 0 || iy >= grid[0].length || !grid[ix][iy]) {
						ans++;
					}
				}
			}
		}
	}
	return ans;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-17 11:27:18
 * @LastEditTime: 2020-11-17 14:43:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1030\main.js
 */
export const allCellsDistOrder = (R, C, r0, c0) => {
	const disArr = [];
	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			const distance = Math.abs(r0 - r) + Math.abs(c0 - c);
			disArr[disArr] ? disArr[distance].push([r, c]) : (disArr[distance] = [[r, c]]);
		}
	}
	const res = [];
	disArr.forEach((item) => {
		res.push(...item);
	});
	return res;
};

export const allCellsDistOrder = (R, C, r0, c0) => {
	const points = [];
	for (let r = 0; r < R; r++) {
		for (let c = 0; c < C; c++) {
			points.push([r, c]);
		}
	}
	points.sort((a, b) => {
		const distanceA = Math.abs(a[0] - r0) + Math.abs(a[1] - c0);
		const distanceB = Math.abs(b[0] - r0) + Math.abs(b[1] - c0);
		return distanceA - distanceB;
	});
	return points;
};

export const allCellsDistOrder = (R, C, r0, c0) => {
	const visited = new Array(R).fill(0).map(() => new Array(C).fill(false));
	visited[r0][c0] = true;
	const queue = [[r0, c0]];
	const res = [];
	while (queue.length) {
		const point = queue.shift();
		res.push(point);
		const x = point[0],
			y = point[1];
		visited[x][y] = true;
		if (y - 1 >= 0 && !visited[x][y - 1]) {
			queue.push([x, y - 1]);
			visited[x][y - 1] = true;
		}
		if (y + 1 < C && !visited[x][y + 1]) {
			queue.push([x, y + 1]);
			visited[x][y + 1] = true;
		}
		if (x - 1 >= 0 && !visited[x - 1][y]) {
			queue.push([x - 1, y]);
			visited[x - 1][y] = true;
		}
		if (x + 1 < R && !visited[x + 1][y]) {
			queue.push([x + 1, y]);
			visited[x + 1][y] = true;
		}
	}
	return res;
};

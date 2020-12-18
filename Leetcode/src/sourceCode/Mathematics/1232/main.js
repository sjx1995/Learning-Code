/*
 * @Author: Sunly
 * @Date: 2020-12-14 19:05:17
 * @LastEditTime: 2020-12-14 19:22:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\1232\main.js
 */
export const checkStraightLine = (coordinates) => {
	if (coordinates.length === 2) return true;
	let isExistK = coordinates[0][0] !== coordinates[1][0];
	let k = isExistK
		? (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
		: coordinates[0][0];
	let b = coordinates[0][1] - k * coordinates[0][0];
	console.log(k, b);
	for (let i = 1; i < coordinates.length; i++) {
		if (isExistK ? coordinates[i][1] !== k * coordinates[i][0] + b : k !== coordinates[i][0]) return false;
	}
	return true;
};

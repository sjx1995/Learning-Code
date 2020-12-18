/*
 * @Author: Sunly
 * @Date: 2020-12-17 15:41:43
 * @LastEditTime: 2020-12-17 15:59:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\593\main.js
 */
export const validSquare = (p1, p2, p3, p4) => {
	const getPowLength = (point1, point2) => {
		return Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2);
	};
	const lines = [
		getPowLength(p1, p2),
		getPowLength(p1, p3),
		getPowLength(p1, p4),
		getPowLength(p2, p3),
		getPowLength(p2, p4),
		getPowLength(p3, p4),
	];
	const borderCount = {};
	for (let i = 0; i < 6; i++) {
		if (lines[i] === 0) return false;
		borderCount[lines[i]] = borderCount[lines[i]] ? borderCount[lines[i]] + 1 : 1;
	}
	if (Object.values(borderCount).toString() === "4,2" || Object.values(borderCount).toString() === "2,4") return true;
	return false;
};

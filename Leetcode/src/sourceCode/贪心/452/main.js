/*
 * @Author: Sunly
 * @Date: 2020-11-23 10:27:08
 * @LastEditTime: 2020-11-23 11:35:11
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\452\main.js
 */
export const findMinArrowShots = (points) => {
	if (!points.length) return 0;
	// points.sort((a, b) => {
	// 	if (a[0] - b[0] < 0) return -1;
	// 	if (a[0] - b[0] > 0) return 1;
	// 	if (a[0] - b[0] === 0 && a[1] - b[1] < 0) return -1;
	// 	if (a[0] - b[0] === 0 && a[1] - b[1] > 0) return 1;
	// 	if (a[0] - b[0] === 0 && a[1] - b[1] === 0) return 0;
	// });
	points.sort((a, b) => a[1] - b[1]);
	console.log(points);
	let endPoint = points[0][1];
	let arrowCounbt = 1;
	for (let i = 1; i < points.length; i++) {
		if (points[i][0] > endPoint) {
			endPoint = points[i][1];
			arrowCounbt++;
		}
	}
	return arrowCounbt;
};

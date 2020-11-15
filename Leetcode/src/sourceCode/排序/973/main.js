/*
 * @Author: Sunly
 * @Date: 2020-11-09 14:20:23
 * @LastEditTime: 2020-11-09 19:21:20
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\973\main.js
 */
// export const KClosest = (points, K) => {
// 	return points
// 		.sort((a, b) => {
// 			if (a[0] ** 2 + a[1] ** 2 < b[0] ** 2 + b[1] ** 2) return -1;
// 			if (a[0] ** 2 + a[1] ** 2 > b[0] ** 2 + b[1] ** 2) return 1;
// 		})
// 		.slice(0, K);
// };

export const KClosest = (points, K, start = 0, end = points.length) => {
	if (K >= points.length) return points;
	while (start < end) {
		while (start < end && points[start][0] ** 2 + points[start][1] ** 2 <= points[0][0] ** 2 + points[0][1] ** 2)
			start++;
		while (start < end && points[end][0] ** 2 + points[end][1] ** 2 >= points[0][0] ** 2 + points[0][1] ** 2) end--;
		[points[start], points[end]] = [points[end], points[start]];
	}
	[points[start], points[0]] = [points[0], points[start]];
	if (start === K) return points.slice(0, K);
	return start > K ? KClosest(points, K, 0, start - 1) : KClosest(points, K, start + 1, points.length);
};

// var kClosest = function (points, K, s = 0, e = points.length - 1, l = s, r = e, t) {
// 	if (K >= points.length) return points;
// 	var d = (p) => ((t = points[p]), t[0] * t[0] + t[1] * t[1]),
// 		q = d(s),
// 		c = (a, m, n) => ((t = a[m]), (a[m] = a[n]), (a[n] = t));
// 	while (l < r) {
// 		while (l < r && d(r) >= q) r--;
// 		while (l < r && d(l) <= q) l++;
// 		c(points, l, r);
// 	}
// 	c(points, l, s);
// 	return l === K ? points.slice(0, l) : l > K ? kClosest(points, K, s, l - 1) : kClosest(points, K, l + 1, e);
// };

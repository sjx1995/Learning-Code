/*
 * @Author: Sunly
 * @Date: 2020-12-31 10:28:21
 * @LastEditTime: 2020-12-31 12:36:50
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\435\main.js
 */
export const eraseOverlapIntervals = (intervals) => {
	if (intervals.length < 2) return 0;
	intervals.sort((a, b) => {
		if (a[0] < b[0]) {
			return -1;
		} else if (a[0] === b[0]) {
			if (a[1] < b[1]) return -1;
			else return 1;
		} else {
			return 1;
		}
	});
	let idx = 0;
	let count = 0;
	while (idx + 1 < intervals.length) {
		if (intervals[idx + 1][0] < intervals[idx][1]) {
			intervals.splice(idx + 1, 1);
			count++;
		} else {
			idx++;
		}
	}
	return count;
};

export const eraseOverlapIntervals = (intervals) => {
	if (intervals.length < 2) return 0;
	intervals.sort((a, b) => a[1] - b[1]);
	let right = intervals[0][1];
	let res = 0;
	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] >= right) {
			right = intervals[i][1];
		} else {
			res++;
		}
	}
	return res;
};

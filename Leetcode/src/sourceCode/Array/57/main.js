/*
 * @Author: Sunly
 * @Date: 2020-11-04 15:27:30
 * @LastEditTime: 2020-11-04 18:38:16
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\57\main.js
 */
export const insert_1 = (intervals, newInterval) => {
	const startArr = [newInterval[0]],
		endArr = [newInterval[1]];

	for (let i = 0; i < intervals.length; i++) {
		startArr.push(intervals[i][0]);
		endArr.push(intervals[i][1]);
	}
	startArr.sort((a, b) => a - b);
	endArr.sort((a, b) => a - b);

	startArr.splice(
		startArr.indexOf(newInterval[0]) + 1,
		endArr.indexOf(newInterval[1]) - startArr.indexOf(newInterval[0])
	);
	endArr.splice(startArr.indexOf(newInterval[0]), endArr.indexOf(newInterval[1]) - startArr.indexOf(newInterval[0]));

	let startIndex = 1,
		endIndex = 0;
	const res = [];
	while (startIndex <= startArr.length - 1) {
		if (endArr[endIndex] >= startArr[startIndex]) {
			startArr.splice(startIndex, 1);
			endArr.splice(endIndex, 1);
		} else {
			startIndex++;
			endIndex++;
		}
	}

	for (let i = 0; i < startArr.length; i++) {
		res.push([startArr[i], endArr[i]]);
	}
	return res;
};

export const insert = (intervals, newInterval) => {
	let left = newInterval[0],
		right = newInterval[1];
	let placed = false;
	const res = [];
	for (let i = 0; i < intervals.length; i++) {
		if (intervals[i][1] < left) {
			res.push(intervals[i]);
		} else if (intervals[i][0] > right) {
			if (!placed) {
				res.push([left, right]);
				placed = true;
			}
			res.push(intervals[i]);
		} else {
			left = Math.min(intervals[i][0], left);
			right = Math.max(intervals[i][1], right);
		}
	}
	if (!placed) {
		res.push([left, right]);
	}
	return res;
};

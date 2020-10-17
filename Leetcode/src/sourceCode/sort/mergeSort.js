/*
 * @Author: Sunly
 * @Date: 2020-10-14 16:55:19
 * @LastEditTime: 2020-10-14 17:43:34
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\mergeSort.js
 */
function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const res = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			res.push(left.shift());
		} else {
			res.push(right.shift());
		}
	}
	while (left.length) {
		res.push(left.shift());
	}
	while (right.length) {
		res.push(right.shift());
	}
	return res;
}

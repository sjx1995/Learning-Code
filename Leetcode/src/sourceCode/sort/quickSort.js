/*
 * @Author: Sunly
 * @Date: 2020-10-14 17:51:39
 * @LastEditTime: 2020-10-15 09:52:59
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\quickSort.js
 */
function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const pivotIndex = Math.floor(arr.length / 2);
	const pivot = arr.splice(pivotIndex, 1);
	const left = [];
	const right = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
}

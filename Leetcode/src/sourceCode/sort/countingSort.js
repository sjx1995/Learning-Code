/*
 * @Author: Sunly
 * @Date: 2020-10-15 10:04:22
 * @LastEditTime: 2020-10-15 10:29:33
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\countingSort.js
 */
function countingSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	const counts = new Array(getMaxNumber(arr) + 1).fill(0);
	for (let i = 0; i < arr.length; i++) {
		counts[i]++;
	}
	let arrIndex = 0;
	for (let i = 0; i < counts.length; i++) {
		while (counts[i]) {
			arr[arrIndex++] = i;
			counts[i]--;
		}
	}
	return arr;
}

function getMaxNumber(arr) {
	let max = arr[0];
	let i = 1;
	while (i < arr.length) {
		max = Math.max(max, arr[i]);
		i++;
	}
	return max;
}

/*
 * @Author: Sunly
 * @Date: 2020-10-14 15:26:42
 * @LastEditTime: 2020-10-14 15:35:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\selectionSort.js
 */
function selectionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

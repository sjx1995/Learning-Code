/*
 * @Author: Sunly
 * @Date: 2020-10-14 15:54:11
 * @LastEditTime: 2020-10-14 16:11:32
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\insertionSort.js
 */
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let perIndex = i - 1;
		let current = arr[i];
		while (perIndex >= 0 && arr[perIndex] > current) {
			arr[perIndex + 1] = arr[perIndex];
			perIndex--;
		}
		arr[perIndex + 1] = current;
	}
	return arr;
}

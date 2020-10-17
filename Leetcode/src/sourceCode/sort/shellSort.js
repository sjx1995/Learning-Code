/*
 * @Author: Sunly
 * @Date: 2020-10-15 15:36:23
 * @LastEditTime: 2020-10-15 17:29:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\shellSort.js
 */

function shellSort(arr) {
	for (let gap = ~~(arr.length / 2); gap >= 1; gap = ~~(gap / 2)) {
		for (let i = gap; i < arr.length; i++) {
			for (j = i - gap; j >= 0; j -= gap) {
				if (arr[j] > arr[j + gap]) {
					[arr[j], arr[j + gap]] = [arr[j + gap], arr[j]];
				}
			}
		}
	}
	return arr;
}

let arr = [12, 56, 32, 125, 41, 0, 26, 85, 94, 126, 526, 87, 16, 95, 206];

shellSort(arr);

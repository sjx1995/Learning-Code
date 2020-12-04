/*
 * @Author: Sunly
 * @Date: 2020-11-03 17:48:47
 * @LastEditTime: 2020-11-03 18:18:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\二分查找\000\main.js
 */
export const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
	if (start <= end) {
		let mid = ~~((start + end) / 2);
		if (arr[mid] === target) return mid;
		if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);
		if (target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
	}
	return -1;
};

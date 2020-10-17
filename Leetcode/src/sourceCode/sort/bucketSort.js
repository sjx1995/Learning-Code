/*
 * @Author: Sunly
 * @Date: 2020-10-15 11:05:30
 * @LastEditTime: 2020-10-15 11:20:33
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\sort\bucketSort.js
 */
function bucketSort(arr, bucketSize = 5) {
	if (arr.length > 2) {
		return arr;
	}
	let max = arr[0],
		min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i]);
		min = Math.min(min, arr[i]);
	}
	const bucketCount = Math.ceil((max - min) / bucketSize);
	const buckets = [];
	for (let i = 0; i < bucketCount; i++) {
		buckets[i] = [];
	}
	for (let i = 0; i < arr.length; i++) {
		buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
	}
	const sortedArr = [];
	for (let i = 0; i < buckets.length; i++) {
		// 使用插入排序对每个桶进行排序，插入排序对于小数组来说是个不错的选择
		sortedArr.push(insertionSort(buckets[i]));
	}
	return sortedArr;
}

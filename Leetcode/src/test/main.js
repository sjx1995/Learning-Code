/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-11-26 15:41:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 冒泡排序
export const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			arr[j] > arr[j + 1] ? ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]) : null;
		}
	}
	return arr;
};

// 选择排序
export const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			minIndex = arr[j] < arr[minIndex] ? j : minIndex;
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
};

// 插入排序
export const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let preIndex = i - 1;
		const current = arr[i];
		while (preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex + 1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex + 1] = current;
	}
	return arr;
};

// 归并排序
export const mergeSort = (arr) => {
	if (arr.length < 2) return arr;
	const middle = ~~(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
	const res = [];
	while (left.length && right.length) res.push(left[0] <= right[0] ? left.shift() : right.shift());
	while (left.length) res.push(left.shift());
	while (right.length) res.push(right.shift());
	return res;
};

// 快速排序
export const quickSort = (arr) => {
	if (arr.length < 2) return arr;
	const pivodIndex = ~~(arr.length / 2);
	const pivod = arr.splice(pivodIndex, 1)[0];
	const left = [],
		right = [];
	arr.forEach((item) => (item <= pivod ? left.push(item) : right.push(item)));
	return [...quickSort(left), pivod, ...quickSort(right)];
};

// 计数排序
export const countingSort = (arr) => {
	const countingArr = [];
	arr.forEach((item) => (countingArr[item] = countingArr[item] ? countingArr[item] + 1 : 1));
	const res = [];
	countingArr.forEach((item, index) => res.push(...new Array(item).fill(index)));
	return res;
};

// 基数排序
export const raidxSort = (arr) => {
	const maxDigit = Math.max(...arr).toString().length;
	for (let i = 0, unit = 10, base = 1; i < maxDigit; i++, unit *= 10, base *= 10) {
		const buckets = [];
		arr.forEach((item) => {
			const index = ~~((item % unit) / base);
			buckets[index] ? buckets[index].push(item) : (buckets[index] = [item]);
		});
		let arrIndex = 0;
		buckets.forEach((item) => {
			while (item.length) arr[arrIndex++] = item.shift();
		});
	}
	return arr;
};

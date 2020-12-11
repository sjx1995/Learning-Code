/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-12-11 12:07:33
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 计数排序
export const countingSort = (n) => {
	const countingArr = [];
	n.forEach((item) => (countingArr[item] = countingArr[item] ? countingArr[item] + 1 : 1));
	const res = [];
	countingArr.forEach((item, index) => res.push(...new Array(item).fill(index)));
	return res;
};

// 选择排序
export const selectionSort = (n) => {
	for (let i = 0; i < n.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n.length; j++) {
			minIndex = n[minIndex] > n[j] ? j : minIndex;
		}
		[n[minIndex], n[i]] = [n[i], n[minIndex]];
	}
	return n;
};

// 冒泡排序
export const bubbleSort = (n) => {
	for (let i = 0; i < n.length - 1; i++) {
		for (let j = 0; j < n.length - i - 1; j++) {
			n[j] > n[j + 1] ? ([n[j], n[j + 1]] = [n[j + 1], n[j]]) : null;
		}
	}
	return n;
};

// 插入排序
export const insertionSort = (n) => {
	for (let i = 1; i < n.length; i++) {
		const cur = n[i];
		let preIndex = i - 1;
		while (preIndex >= 0 && n[preIndex] > cur) {
			n[preIndex + 1] = n[preIndex];
			preIndex--;
		}
		n[preIndex + 1] = cur;
	}
	return n;
};

// 基数排序
export const radixSort = (n) => {
	const max = Math.max(...n).toString().length;
	for (let i = 0, base = 1, unit = 10; i < max; i++, base *= 10, unit *= 10) {
		const buckets = [];
		n.forEach((item) => {
			const idx = ~~((item % unit) / base);
			buckets[idx] ? buckets[idx].push(item) : (buckets[idx] = [item]);
		});
		let nIdx = 0;
		buckets.forEach((item) => {
			while (item.length) n[nIdx++] = item.shift();
		});
	}
	return n;
};

// 归并排序
export const mergeSort = (n) => {
	if (n.length < 2) return n;
	const mid = ~~(n.length / 2);
	const left = n.slice(0, mid),
		right = n.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
};
export const merge = (left, right) => {
	const res = [];
	while (left.length && right.length) res.push(left[0] < right[0] ? left.shift() : right.shift());
	while (left.length) res.push(left.shift());
	while (right.length) res.push(right.shift());
	return res;
};

// 快速排序
export const quickSort = (n) => {
	if (n.length < 2) return n;
	const pivodIndex = ~~(n.length / 2);
	const pivod = n.splice(pivodIndex, 1)[0];
	const left = [],
		right = [];
	n.forEach((item) => (item < pivod ? left.push(item) : right.push(item)));
	return [...quickSort(left), pivod, ...quickSort(right)];
};

/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-12-18 12:17:44
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 冒泡排序
export const bubbleSort = (n) => {
	for (let i = 0; i < n.length - 1; i++) {
		for (let j = 0; j < n.length - i - 1; j++) {
			n[j] > n[j + 1] ? ([n[j], n[j + 1]] = [n[j + 1], n[j]]) : null;
		}
	}
	return n;
};
// 快速排序
export const quickSort = (n) => {
	if (n.length < 2) return n;
	const midIndex = ~~(n.length / 2);
	const mid = n.splice(midIndex, 1)[0];
	const left = [],
		right = [];
	n.forEach((t) => (t < mid ? left.push(t) : right.push(t)));
	return [...quickSort(left), mid, ...quickSort(right)];
};

// 计数排序
export const countingArr = (n) => {
	const ca = [];
	n.forEach((t) => (ca[t] ? ca[t]++ : (ca[t] = 1)));
	const res = [];
	ca.forEach((t, i) => res.push(...new Array(t).fill(i)));
	return res;
};

// 归并排序
export const mergeSort = (n) => {
	if (n.length < 2) return n;
	const m = ~~(n.length / 2);
	const left = n.slice(0, m),
		right = n.slice(m);
	return merge(mergeSort(left), mergeSort(right));
};
export const merge = (left, right) => {
	const res = [];
	while (left.length && right.length) res.push(left[0] < right[0] ? left.shift() : right.shift());
	while (left.length) res.push(left.shift());
	while (right.length) res.push(right.shift());
	return res;
};

// 插入排序
export const insertionSort = (n) => {
	for (let i = 1; i < n.length; i++) {
		const c = n[i];
		let p = i - 1;
		while (p >= 0 && n[p] > c) {
			n[p + 1] = n[p];
			p--;
		}
		n[p + 1] = c;
	}
	return n;
};

// 基数排序
export const raidxSort = (n) => {
	const m = Math.max(...n).toString().length;
	for (let i = 0, b = 1, u = 10; i < m; i++, b *= 10, u *= 10) {
		const bs = [];
		n.forEach((t) => {
			const idx = ~~((t % u) / b);
			bs[idx] ? bs[idx].push(t) : (bs[idx] = [t]);
		});
		let id = 0;
		bs.forEach((t) => {
			while (t.length) n[id++] = t.shift();
		});
	}
	return n;
};

// 选择排序
export const selectionSort = (n) => {
	for (let i = 0; i < n.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n.length; j++) {
			minIndex = n[j] < n[minIndex] ? j : minIndex;
		}
		[n[i], n[minIndex]] = [n[minIndex], n[i]];
	}
	return n;
};

// 二分查找
export const binarySearch = (a, t) => {
	let s = 0,
		e = a.length - 1;
	while (s <= e) {
		const m = ~~((s + e) / 2);
		if (a[m] === t) return m;
		if (a[m] > t) e = m - 1;
		if (a[m] < t) s = m + 1;
	}
	return -1;
};

// 二分查找-递归
export const binarySearch_recursion = (a, t, start = 0, end = a.length - 1) => {
	if (start > end) return -1;
	const m = ~~((start + end) / 2);
	if (a[m] === t) return m;
	if (a[m] > t) return binarySearch_recursion(a, t, start, m - 1);
	if (a[m] < t) return binarySearch_recursion(a, t, m + 1, end);
};

/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-12-31 11:09:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 二分查找
export const binarySearch_without_recursion = (a, t) => {
	let s = 0,
		e = a.length - 1;
	while (s <= e) {
		const m = ~~((s + e) / 2);
		if (a[m] === t) return m;
		else if (a[m] > t) e = m - 1;
		else s = m + 1;
	}
	return -1;
};

// 选择排序
export const selectionSort = (a) => {
	for (let i = 0; i < a.length - 1; i++) {
		let m = i;
		for (let j = i + 1; j < a.length; j++) {
			m = a[m] < a[j] ? m : j;
		}
		[a[m], a[i]] = [a[i], a[m]];
	}
	return a;
};

// 归并排序
export const mergeSort = (a) => {
	if (a.length < 2) return a;
	const m = ~~(a.length / 2);
	const l = a.slice(0, m),
		r = a.slice(m);
	return merge(mergeSort(l), mergeSort(r));
};
const merge = (l, r) => {
	const a = [];
	while (l.length && r.length) a.push(l[0] < r[0] ? l.shift() : r.shift());
	while (l.length) a.push(l.shift());
	while (r.length) a.push(r.shift());
	return a;
};

// 计数排序
export const countingSort = (a) => {
	const b = [];
	a.forEach((t) => (b[t] ? b[t]++ : (b[t] = 1)));
	const c = [];
	b.forEach((t, i) => c.push(...new Array(t).fill(i)));
	return c;
};

// 快速排序
export const quickSort = (a) => {
	if (a.length < 2) return a;
	const m = a.splice(~~(a.length / 2), 1)[0];
	const l = [],
		r = [];
	a.forEach((t) => (t > m ? r.push(t) : l.push(t)));
	return [...quickSort(l), m, ...quickSort(r)];
};

// 二分查找-递归
export const binarySearch = (a, t, s = 0, e = a.length - 1) => {
	if (s > e) return -1;
	const m = ~~((s + e) / 2);
	if (a[m] === t) return m;
	else if (a[m] > t) return binarySearch(a, t, s, m - 1);
	else return binarySearch(a, t, m + 1, e);
};

// 基数排序
export const radixSort = (a) => {
	const z = Math.max(...a).toString().length;
	for (let i = 0, b = 1, u = 10; i < z; i++, b *= 10, u *= 10) {
		const s = [];
		a.forEach((t) => {
			const c = ~~((t % u) / b);
			s[c] ? s[c].push(t) : (s[c] = [t]);
		});
		let d = 0;
		s.forEach((t) => {
			while (t.length) a[d++] = t.shift();
		});
	}
	return a;
};

// 插入排序
export const insertionSort = (a) => {
	for (let i = 1; i < a.length; i++) {
		const c = a[i];
		let p = i - 1;
		while (p >= 0 && a[p] > c) {
			a[p + 1] = a[p];
			p--;
		}
		a[p + 1] = c;
	}
	return a;
};

// 冒泡排序
export const bubbleSort = (a) => {
	for (let i = 0; i < a.length - 1; i++) {
		for (let j = 0; j < a.length - i - 1; j++) {
			a[j] > a[j + 1] ? ([a[j], a[j + 1]] = [a[j + 1], a[j]]) : null;
		}
	}
	return a;
};

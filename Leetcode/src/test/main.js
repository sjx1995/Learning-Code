/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-12-25 13:20:29
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 归并排序
export const mergeSort = (t) => {
	if (t.length < 2) return t;
	const m = ~~(t.length / 2);
	const l = t.slice(0, m),
		r = t.slice(m);
	return merge(mergeSort(l), mergeSort(r));
};
const merge = (l, r) => {
	const a = [];
	while (l.length && r.length) a.push(l[0] <= r[0] ? l.shift() : r.shift());
	while (l.length) a.push(l.shift());
	while (r.length) a.push(r.shift());
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

// 计数排序
export const countingSort = (a) => {
	const c = [];
	a.forEach((t) => (c[t] ? c[t]++ : (c[t] = 1)));
	const r = [];
	c.forEach((t, i) => r.push(...new Array(t).fill(i)));
	return r;
};

// 选择排序
export const selectionSort = (a) => {
	for (let i = 0; i < a.length - 1; i++) {
		let m = i;
		for (let j = i + 1; j < a.length; j++) {
			m = a[j] < a[m] ? j : m;
		}
		[a[m], a[i]] = [a[i], a[m]];
	}
	return a;
};

// 快速排序
export const quickSort = (a) => {
	if (a.length < 2) return a;
	const t = ~~(a.length / 2);
	const m = a.splice(t, 1)[0];
	const l = [],
		r = [];
	a.forEach((b) => (b < m ? l.push(b) : r.push(b)));
	return [...quickSort(l), m, ...quickSort(r)];
};

// 基数排序
export const radixSort = (a) => {
	const m = Math.max(...a).toString().length;
	for (let i = 0, b = 1, u = 10; i < m; i++, u *= 10, b *= 10) {
		const s = [];
		a.forEach((t) => {
			const c = ~~((t % u) / b);
			s[c] ? s[c].push(t) : (s[c] = [t]);
		});
		let x = 0;
		s.forEach((g) => {
			while (g.length) a[x++] = g.shift();
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

// 二分查找-递归
export const binarySearch_rec = (a, t, s = 0, e = a.length - 1) => {
	if (s > e) return -1;
	const m = ~~((s + e) / 2);
	if (a[m] === t) return m;
	else if (a[m] > t) return binarySearch(a, t, s, m - 1);
	else return binarySearch(a, t, m + 1, e);
};

// 二分查找
export const binarySearch = (a, t) => {
	let s = 0,
		e = a.length - 1;
	while (s <= e) {
		const m = ~~((s + e) / 2);
		if (a[m] === t) return m;
		if (a[m] > t) e = m - 1;
		else s = m + 1;
	}
	return -1;
};

export const cutCake = () => {
	const count = [true];
	let cur = 1;
	while (true) {
		let countIndex = 0;
		while (Math.sqrt(countIndex + 1 + cur) % 1 !== 0 || count[countIndex]) countIndex++;
		cur = countIndex + 1;
		count[countIndex] = true;
		console.log(count);
		console.log(countIndex);
		if (!count.includes(undefined) && Math.sqrt(cur + 1) % 1 === 0) return count.length;
	}
};

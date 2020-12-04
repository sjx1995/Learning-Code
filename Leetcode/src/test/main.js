/*
 * @Author: Sunly
 * @Date: 2020-09-27 16:45:37
 * @LastEditTime: 2020-12-03 10:35:56
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\test\main.js
 */
// 冒泡算法
export const bubbleSort = (nums) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = 0; j < nums.length - i - 1; j++) {
			nums[j] > nums[j + 1] ? ([nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]) : null;
		}
	}
	return nums;
};

// 选择排序
export const selectionSort = (nums) => {
	for (let i = 0; i < nums.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < nums.length; j++) {
			minIndex = nums[j] < nums[minIndex] ? j : minIndex;
		}
		[nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
	}
	return nums;
};

// 插入排序
export const insertionSort = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		const current = nums[i];
		let preIndex = i - 1;
		while (preIndex >= 0 && nums[preIndex] > current) {
			nums[preIndex + 1] = nums[preIndex];
			preIndex--;
		}
		nums[preIndex + 1] = current;
	}
	return nums;
};

// 快速排序
export const quickSort = (nums) => {
	if (nums.length < 2) return nums;
	const pivodIndex = ~~(nums.length / 2);
	const pivod = nums.splice(pivodIndex, 1)[0];
	const left = [],
		right = [];
	nums.forEach((item) => (item <= pivod ? left.push(item) : right.push(item)));
	return [...quickSort(left), pivod, ...quickSort(right)];
};

// 归并排序
export const mergeSort = (nums) => {
	if (nums.length < 2) return nums;
	const mid = ~~(nums.length / 2);
	const left = nums.slice(0, mid),
		right = nums.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
	const res = [];
	while (left.length && right.length) res.push(left[0] <= right[0] ? left.shift() : right.shift());
	while (left.length) res.push(left.shift());
	while (right.length) res.push(right.shift());
	return res;
};

// 计数排序
export const countingSort = (nums) => {
	const countingArr = [];
	nums.forEach((item) => (countingArr[item] = countingArr[item] ? countingArr[item] + 1 : 1));
	const res = [];
	countingArr.forEach((item, index) => res.push(...new Array(item).fill(index)));
	return res;
};

// 基数排序
export const radixSort = (nums) => {
	const maxDigit = Math.max(...nums).toString().length;
	for (let i = 0, base = 1, unit = 10; i < maxDigit; i++, base *= 10, unit *= 10) {
		const buckets = [];
		nums.forEach((item) => {
			const index = ~~((item % unit) / base);
			buckets[index] ? buckets[index].push(item) : (buckets[index] = [item]);
		});
		let numsIndex = 0;
		buckets.forEach((item) => {
			while (item.length) nums[numsIndex++] = item.shift();
		});
	}
	return nums;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-02 18:14:28
 * @LastEditTime: 2020-11-02 18:55:03
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\349\main.js
 */
export const intersection_1 = (nums1, nums2) => {
	nums1.sort((a, b) => a - b);
	nums2.sort((a, b) => a - b);
	let i = 0,
		j = 0;
	const res = [];
	while (i < nums1.length && j < nums2.length) {
		while (nums1[i] === nums1[i + 1]) {
			i++;
		}
		while (nums2[j] === nums2[j + 1]) {
			j++;
		}
		if (nums1[i] === nums2[j]) {
			res.push(nums1[i]);
			i++;
			j++;
			continue;
		}
		if (nums1[i] < nums2[j]) {
			i++;
			continue;
		}
		if (nums1[i] > nums2[j]) {
			j++;
			continue;
		}
	}
	return res;
};

export const intersection_2 = (nums1, nums2) => {
	let set1 = new Set(nums1);
	let set2 = new Set(nums2);
	let res = [];
	if (set1.size > set2.size) {
		const tempSet = set1;
		set1 = set2;
		set2 = tempSet;
	}
	for (const item of set1) {
		if (set2.has(item)) {
			res.push(item);
		}
	}
	return res;
};

export const intersection_3 = (nums1, nums2) => {
	let map = new Map();
	let res = [];
	for (const item of nums1) {
		map.set(item, true);
	}
	for (const item of nums2) {
		if (map.has(item) && map.get(item)) {
			res.push(item);
			map.set(item, false);
		}
	}
	return res;
};

export const intersection_4 = (nums1, nums2) => {
	return nums1.filter((item, index) => nums2.includes(item) && nums1.lastIndexOf(item) === index);
};

export const intersection = (nums1, nums2) => {
	return [...new Set(nums1.filter((item) => nums2.includes(item)))];
};

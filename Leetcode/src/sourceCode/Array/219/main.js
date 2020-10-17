/*
 * @Author: Sunly
 * @Date: 2020-10-12 14:44:00
 * @LastEditTime: 2020-10-12 15:37:54
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\219\main.js
 */
export const containsNearbyDuplicate_1 = (nums, k) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length && j <= i + k; j++) {
			if (nums[i] === nums[j]) {
				return true;
			}
		}
	}
	return false;
};

export const containsNearbyDuplicate_2 = (nums, k) => {
	if (k === 0) return false;
	let l = 0,
		r = 1;
	while (l < nums.length - 1) {
		if (nums[l] === nums[r]) {
			return true;
		}
		if (l + k > r && r < nums.length) {
			r++;
		} else {
			l++;
			r = l + 1;
		}
	}
	return false;
};

export const containsNearbyDuplicate_3 = (nums, k) => {
	let set = [];
	for (let i = 0; i < nums.length; i++) {
		if (set.indexOf(nums[i]) > -1) {
			return true;
		}
		set.push(nums[i]);
		if (set.length > k) {
			set.shift();
		}
	}
	return false;
};

export const containsNearbyDuplicate = (nums, k) => {
	const set = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (set.has(nums[i])) {
			return true;
		}
		set.add(nums[i]);
		if (set.length > k) {
			set.delete(nums[i - k]);
		}
	}
};

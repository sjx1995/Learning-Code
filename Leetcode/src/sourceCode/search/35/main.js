/*
 * @Author: Sunly
 * @Date: 2020-12-01 11:55:21
 * @LastEditTime: 2020-12-01 14:18:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\35\main.js
 */
export const searchInput_1 = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) return i;
	}
	return nums.length;
};

export const searchInput_2 = (nums, target) => {
	let [index, isFind] = binarySearch(nums, target);
	if (isFind) return index;
	while (index < nums.length && nums[index] < target) {
		index++;
	}
	return index;
};
const binarySearch = (nums, target) => {
	let start = 0,
		end = nums.length - 1;
	let minStart = 0;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] < target) (start = mid + 1) && (minStart = mid);
		else if (nums[mid] > target) end = mid - 1;
		else return [mid, true];
	}
	return [minStart, false];
};

export const searchInput = (nums, target) => {
	let start = 0,
		end = nums.length - 1;
	let index = nums.length;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] >= target) {
			index = mid;
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return index;
};

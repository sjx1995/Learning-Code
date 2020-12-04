/*
 * @Author: Sunly
 * @Date: 2020-12-04 11:30:25
 * @LastEditTime: 2020-12-04 14:11:17
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\162\main.js
 */

export const findPeakElement = (nums) => {
	let i = 1;
	while (i < nums.length - 1) {
		if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
		i++;
	}
	return nums[0] > nums[nums.length - 1] ? 0 : nums.length - 1;
};

export const findPeakElement = (nums) => {
	nums.unshift(-Infinity);
	nums.push(-Infinity);
	let start = 1,
		end = nums.length - 2;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid - 1;
		if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) start = mid + 1;
		else end = mid - 1;
	}
	return -1;
};

export const findPeakElement = (nums) => {
	let start = 0,
		end = nums.length - 1;
	while (start < end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] > nums[mid + 1]) end = mid;
		else start = mid + 1;
	}
	return end;
};

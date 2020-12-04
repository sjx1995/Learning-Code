/*
 * @Author: Sunly
 * @Date: 2020-12-01 18:21:52
 * @LastEditTime: 2020-12-02 14:57:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\33\main.js
 */
export const search_1 = (nums, target) => {
	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] === target) return mid;
		// 如果右侧是递增的
		else if (nums[mid] < nums[end]) {
			if (nums[mid] < target && target <= nums[end]) start = mid + 1;
			else end = mid - 1;
		}
		// 左侧是递增的
		else {
			if (nums[mid] > target && target >= nums[start]) end = mid - 1;
			else start = mid + 1;
		}
	}
	return -1;
};

export const search = (nums, target) => {
	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] < nums[0] && target >= nums[0]) nums[mid] = Infinity;
		if (nums[mid] >= nums[0] && target < nums[0]) nums[mid] = -Infinity;
		if (target > nums[mid]) start = mid + 1;
		else if (target < nums[mid]) end = mid - 1;
	}
	return -1;
};

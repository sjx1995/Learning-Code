/*
 * @Author: Sunly
 * @Date: 2020-12-01 10:38:50
 * @LastEditTime: 2020-12-01 11:25:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\34\main.js
 */
export const searchRange = (nums, target) => {
	let i = 0,
		j = 0;
	for (; i < nums.length; i++) {
		if (nums[i] === target) {
			for (j = i + 1; j < nums.length; j++) {
				if (nums[j] !== target) return [i, j - 1];
			}
			return [i, j - 1];
		}
	}
	return [-1, -1];
};

export const searchRange = (nums, target) => {
	let targetIndex = binarySearch(nums, target);
	if (targetIndex >= 0) {
		let l = targetIndex,
			r = targetIndex;
		while (l >= 0 && nums[l] === target) l--;
		while (r < nums.length && nums[r] === target) r++;
		return [l + 1, r - 1];
	}
	return [-1, -1];
};
const binarySearch = (arr, target) => {
	let start = 0,
		end = arr.length - 1;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		const midEle = arr[mid];
		if (midEle > target) end = mid - 1;
		else if (midEle < target) start = mid + 1;
		else return mid;
	}
	return -1;
};

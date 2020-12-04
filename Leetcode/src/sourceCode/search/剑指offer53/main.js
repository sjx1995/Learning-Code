/*
 * @Author: Sunly
 * @Date: 2020-11-03 17:18:26
 * @LastEditTime: 2020-11-03 18:46:42
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\二分查找\剑指offer53\main.js
 */
export const missingNumber_1 = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		if (i !== nums[i]) {
			return i;
		}
	}
	return nums[nums.length - 1] + 1;
};

export const missingNumber = (nums) => {
	let start = 0,
		end = nums.length - 1;
	let mid = ~~((start + end) / 2);
	while (start <= end) {
		mid = ~~((start + end) / 2);
		if (nums[mid] === mid) start = mid + 1;
		if (nums[mid] !== mid) end = mid - 1;
	}
	return start;
};

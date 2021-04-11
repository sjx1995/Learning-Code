/*
 * @Author: Sunly
 * @Date: 2021-04-09 10:33:21
 * @LastEditTime: 2021-04-09 12:15:00
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\154\main.js
 */
const findMin = nums => {
	let min = Infinity;
	for (let i = 0; i < nums.length; i++) {
		min = Math.min(nums[i], min);
	}
	return min;
};

const findMin = function (nums) {
	if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
	let start = 0,
		end = nums.length - 1;
	while (start < end) {
		const mid = ~~((start + end) / 2);
		if (nums[end] > nums[mid]) {
			end = mid;
		} else if (nums[end] < nums[mid]) {
			start = mid + 1;
		} else {
			end--;
		}
	}
	return nums[start];
};

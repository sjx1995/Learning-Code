/*
 * @Author: Sunly
 * @Date: 2020-12-02 11:20:46
 * @LastEditTime: 2021-04-09 11:56:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\153\main.js
 */
export const findMin_1 = nums => {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] < nums[i]) return nums[i + 1];
	}
	return nums[0];
};

export const findMin = nums => {
	if (nums.length === 1 || nums[0] < nums[nums.length - 1]) return nums[0];
	let start = 0,
		end = nums.length - 1;
	while (start < end) {
		const mid = ~~((start + end) / 2);
		if (nums[start] < nums[mid]) {
			start = mid + 1;
		} else if (nums[start] > nums[mid]) {
			end = mid;
		} else {
			start++;
		}
	}
	return nums[end];
};

const findMin = nums => {
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

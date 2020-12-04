/*
 * @Author: Sunly
 * @Date: 2020-12-02 11:20:46
 * @LastEditTime: 2020-12-02 12:17:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\153\main.js
 */
export const findMin_1 = (nums) => {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] < nums[i]) return nums[i + 1];
	}
	return nums[0];
};

export const findMin = (nums) => {
	if (nums.length < 2 || nums[nums.length - 1] > nums[0]) return nums[0];
	let start = 0,
		end = nums.length - 1;
	while (start <= end) {
		const mid = ~~((start + end) / 2);
		if (nums[mid] < nums[mid - 1]) return nums[mid];
		if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
		if (nums[mid] > nums[0]) start = mid + 1;
		else if (nums[mid] < nums[0]) end = mid - 1;
	}
	return -1;
};

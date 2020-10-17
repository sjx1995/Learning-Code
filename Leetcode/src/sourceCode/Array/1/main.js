/*
 * @Author: Sunly
 * @Date: 2020-10-09 11:37:31
 * @LastEditTime: 2020-10-09 12:17:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1\main.js
 */
export const twoSum_1 = (nums, target) => {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

export const twoSum_2 = (nums, target) => {
	while (nums.length > 1) {
		const last = nums.pop();
		if (nums.indexOf(target - last) > -1) {
			return [nums.indexOf(target - last), nums.length];
		}
	}
};

export const twoSum = (nums, target) => {
	let temp = [];
	for (let i = 0; i < nums.length; i++) {
		if (temp[target - nums[i]] !== undefined) {
			return [temp[target - nums[i]], i];
		}
		temp[nums[i]] = i;
	}
};

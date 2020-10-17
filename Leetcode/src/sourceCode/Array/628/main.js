/*
 * @Author: Sunly
 * @Date: 2020-10-12 11:31:24
 * @LastEditTime: 2020-10-12 11:55:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\628\main.js
 */
export const maximumProduct_1 = (nums) => {
	nums.sort((a, b) => a - b);
	let a = nums[nums.length - 1];
	let case1 = nums[0] * nums[1];
	let case2 = nums[nums.length - 2] * nums[nums.length - 3];
	return case1 > case2 ? case1 * a : case2 * a;
};

export const maximumProduct = (nums) => {
	let firstMax = -Infinity,
		secondMax = -Infinity,
		thirdMax = -Infinity;
	let firstMin = +Infinity,
		secondMin = +Infinity;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= firstMax) {
			thirdMax = secondMax;
			secondMax = firstMax;
			firstMax = nums[i];
		} else if (nums[i] >= secondMax) {
			thirdMax = secondMax;
			secondMax = nums[i];
		} else if (nums[i] >= thirdMax) {
			thirdMax = nums[i];
		}
		if (nums[i] <= firstMin) {
			secondMin = firstMin;
			firstMin = nums[i];
		} else if (nums[i] <= secondMin) {
			secondMin = nums[i];
		}
	}
	return firstMax * secondMax * thirdMax > firstMax * firstMin * secondMin
		? firstMax * secondMax * thirdMax
		: firstMax * firstMin * secondMin;
};

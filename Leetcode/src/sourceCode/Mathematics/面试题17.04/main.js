/*
 * @Author: Sunly
 * @Date: 2021-01-13 20:16:54
 * @LastEditTime: 2021-01-13 20:29:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\面试题17.04\main.js
 */
export const missingNumber = (nums) => {
	const isAppear = [];
	nums.forEach((num) => (isAppear[num] = true));
	for (let i = 0; i < isAppear.length; i++) {
		if (!isAppear[i]) return i;
	}
	return isAppear.length;
};

export const missingNumber = (nums) => {
	if (nums.length - 1 === nums[nums.length - 1]) return nums[nums.length - 1] + 1;
	const curAvg = nums.reduce((acc, cur) => (acc += cur)) / (nums.length + 1);
	const actualAvg = nums.length / 2;
	return (actualAvg - curAvg) * (nums.length + 1);
};

/*
 * @Author: Sunly
 * @Date: 2021-04-15 11:01:30
 * @LastEditTime: 2021-04-15 18:23:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\198\main.js
 */
const rob = nums => {
	if (nums.length === 0) return 0;
	if (nums.length <= 2) return Math.max(...nums);
	let money = [nums[0], Math.max(nums[0], nums[1])];
	for (let i = 2; i < nums.length; i++) {
		money[i] = Math.max(money[i - 2] + nums[i], money[i - 1]);
	}
	return money[money.length - 1];
};

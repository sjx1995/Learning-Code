/*
 * @Author: Sunly
 * @Date: 2021-04-15 10:54:57
 * @LastEditTime: 2021-04-15 18:22:51
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\213\main.js
 */
const rob = nums => {
	if (nums.length === 0) return 0;
	if (nums.length <= 3) return Math.max(...nums);
	function goRob(n) {
		const dp = [n[0], Math.max(n[0], n[1])];
		for (let i = 2; i < n.length; i++) {
			dp[i] = Math.max(dp[i - 2] + n[i], dp[i - 1]);
		}
		return dp[dp.length - 1];
	}
	return Math.max(goRob(nums.slice(0, nums.length - 1)), goRob(nums.slice(1, nums.length)));
};

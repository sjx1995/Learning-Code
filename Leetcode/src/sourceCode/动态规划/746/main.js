/*
 * @Author: Sunly
 * @Date: 2020-12-21 12:03:55
 * @LastEditTime: 2020-12-21 17:06:24
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\746\main.js
 */
export const minCostClimbingStairs = (cost) => {
	for (let i = 2; i < cost.length; i++) {
		cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
	}
	return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

export const minCostClimbingStairs = (cost) => {
	const totalCost = new Array(cost.length + 1);
	totalCost[0] = 0;
	totalCost[1] = Math.min(cost[0], cost[1]);
	for (let i = 2; i <= cost.length; i++) {
		totalCost[i] = Math.min(totalCost[i - 1] + cost[i], totalCost[i - 2] + cost[i - 1]);
	}
	return Math.min(totalCost[totalCost.length - 1]);
};

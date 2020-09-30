/*
 * @Author: Sunly
 * @Date: 2020-09-29 10:32:33
 * @LastEditTime: 2020-09-29 11:29:19
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\121\main.js
 */

// 双指针/滑动窗口

export const maxProfit = (prices) => {
	let i = 0,
		j = 1,
		profit = 0;
	while (j < prices.length) {
		if (prices[i] > prices[j]) {
			i = j;
			j = i + 1;
		} else {
			if (profit <= prices[j] - prices[i]) {
				profit = prices[j] - prices[i];
			}
			j++;
		}
	}
	return profit;
};

// 贪心算法

export const maxProfit_greed = (prices) => {
	let profit = 0,
		min = prices[0];
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - min > profit) {
			profit = prices[i] - min;
		}
		if (prices[i] < min) {
			min = prices[i];
		}
	}
	return profit;
};

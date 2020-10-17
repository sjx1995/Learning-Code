/*
 * @Author: Sunly
 * @Date: 2020-09-28 12:21:04
 * @LastEditTime: 2020-09-28 14:26:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\122\main.js
 */
export const bestTimeToBugAndSellStock2 = (prices) => {
	let profit = 0
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < prices[i + 1]) {
			profit += prices[i + 1] - prices[i]
		}
	}
	return profit
}

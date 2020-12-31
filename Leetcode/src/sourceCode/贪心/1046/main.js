/*
 * @Author: Sunly
 * @Date: 2020-12-30 10:12:35
 * @LastEditTime: 2020-12-30 11:32:08
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\1046\main.js
 */
export const lastStoneWeight = (stones) => {
	stones.sort((a, b) => b - a);
	while (stones.length > 1) {
		let stone = stones.shift() - stones.shift();
		stones = (stone === 0 ? [...stones] : [...stones, stone]).sort((a, b) => b - a);
	}
	return stones.length ? stones[0] : 0;
};

export const lastStoneWeight = (stones) => {};

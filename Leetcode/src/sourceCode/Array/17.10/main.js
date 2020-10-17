/*
 * @Author: Sunly
 * @Date: 2020-10-10 17:18:44
 * @LastEditTime: 2020-10-10 17:43:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\17.10\main.js
 */
export const majorityElement = (nums) => {
	let map = {};
	for (let item of nums) {
		if (map[item]) {
			map[item]++;
		} else {
			map[item] = 1;
		}
		if (map[item] > nums.length / 2) {
			return item;
		}
	}
	return -1;
};

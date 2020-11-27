/*
 * @Author: Sunly
 * @Date: 2020-11-25 17:59:21
 * @LastEditTime: 2020-11-25 18:11:45
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1636\main.js
 */
export const frequencySort = (nums) => {
	let map = new Map();
	nums.forEach((item) => map.set(item, map.has(item) ? map.get(item) + 1 : 1));
	const buckets = [];
	for (const item of map) {
		buckets[item[1]] ? buckets[item[1]].push(item[0]) : (buckets[item[1]] = [item[0]]);
	}
	const res = [];
	buckets.forEach((item, index) => {
		if (item) {
			item.sort((a, b) => b - a);
			item.forEach((num) => res.push(...new Array(index).fill(num)));
		}
	});
	return res;
};

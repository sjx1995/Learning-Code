/*
 * @Author: Sunly
 * @Date: 2020-11-25 17:34:35
 * @LastEditTime: 2020-11-25 17:39:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1491\main.js
 */
export const average = (salary) => {
	let min = +Infinity,
		max = -Infinity;
	let sum = salary.reduce((acc, cur) => {
		min = Math.min(cur, min);
		max = Math.max(cur, max);
		return acc + cur;
	}, 0);
	return (sum - min - max) / (salary.length - 2);
};

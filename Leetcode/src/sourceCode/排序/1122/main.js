/*
 * @Author: Sunly
 * @Date: 2020-11-25 16:47:19
 * @LastEditTime: 2020-11-25 16:56:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1122\main.js
 */
export const relativeSortArray = (arr1, arr2) => {
	const countingArr = [];
	arr1.forEach((item) => (countingArr[item] = countingArr[item] ? countingArr[item] + 1 : 1));
	const res = [];
	arr2.forEach((item) => {
		countingArr[item] ? res.push(...new Array(countingArr[item]).fill(item)) : null;
		countingArr[item] = 0;
	});
	countingArr.forEach((item, index) => (item ? res.push(...new Array(item).fill(index)) : null));
	return res;
};

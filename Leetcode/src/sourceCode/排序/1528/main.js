/*
 * @Author: Sunly
 * @Date: 2020-11-25 17:54:47
 * @LastEditTime: 2020-11-25 17:57:19
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1528\main.js
 */
export const restoreString = (s, indices) => {
	const arr = [];
	indices.forEach((item, index) => (arr[item] = s[index]));
	return arr.join("");
};

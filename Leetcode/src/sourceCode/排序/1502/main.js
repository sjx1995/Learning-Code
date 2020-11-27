import { sortList } from "../../LinkedList/148/main";

/*
 * @Author: Sunly
 * @Date: 2020-11-25 17:48:15
 * @LastEditTime: 2020-11-25 17:50:29
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1502\main.js
 */
export const canMakeArithmeticProgression = (arr) => {
	arr.sort((a, b) => a - b);
	const diff = arr[1] - arr[0];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] - arr[i] !== diff) return false;
	}
	return true;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-03 16:26:43
 * @LastEditTime: 2020-11-03 16:41:08
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\1535\main.js
 */
export const getWinner = (arr, k) => {
	let resIndex = 0;
	let winCount = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[resIndex] > arr[i]) {
			winCount++;
		} else {
			resIndex = i;
			winCount = 1;
		}
		if (winCount >= k) {
			return arr[resIndex];
		}
	}
	return arr[resIndex];
};

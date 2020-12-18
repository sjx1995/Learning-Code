/*
 * @Author: Sunly
 * @Date: 2020-12-15 11:54:03
 * @LastEditTime: 2020-12-15 12:07:36
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\738\main.js
 */
export const monotoneIncreasingDigits = (N) => {
	if (N < 10) return N;
	const numbers = N.toString().split("");
	for (let i = numbers.length - 2; i >= 0; i--) {
		if (numbers[i] > numbers[i + 1]) {
			numbers[i]--;
			for (let j = i + 1; j < numbers.length; j++) {
				numbers[j] = 9;
			}
		}
	}
	return Number(numbers.join(""));
};

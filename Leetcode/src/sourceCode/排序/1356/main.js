/*
 * @Author: Sunly
 * @Date: 2020-11-06 11:20:18
 * @LastEditTime: 2020-11-06 12:33:46
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1356\main.js
 */
export const sortByBits_1 = (arr) => {
	return arr.sort((a, b) => {
		const num1 = a
			.toString(2)
			.split("")
			.reduce((acc, cur) => (cur === "1" ? acc + 1 : acc), 0);
		const num2 = b
			.toString(2)
			.split("")
			.reduce((acc, cur) => (cur === "1" ? acc + 1 : acc), 0);
		if (num1 < num2) return -1;
		if (num1 > num2) return 1;
		if (num1 === num2) {
			if (a < b) return -1;
			if (a > b) return 1;
		}
		return 0;
	});
};

export const sortByBits = (arr) => {
	const getBits = (num) => {
		let count = 0;
		while (num !== 0) {
			count += num & 1;
			num = num >> 1;
		}
		return count;
	};
	return arr.sort((a, b) => getBits(a) - getBits(b) || a - b);
};

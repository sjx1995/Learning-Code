/*
 * @Author: Sunly
 * @Date: 2020-11-12 11:52:13
 * @LastEditTime: 2020-11-12 12:16:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\922\main.js
 */
export const sortArrayByParityII = (A) => {
	for (let i = 0; i < A.length; i++) {
		if (A[i] % 2 === i % 2) {
			continue;
		} else {
			let j = i + 1;
			while (A[j] % 2 !== i % 2 && j < A.length) {
				j++;
			}
			[A[i], A[j]] = [A[j], A[i]];
		}
	}
	return A;
};

export const sortArrayByParityII = (A) => {
	const res = [];
	let oddIndex = 1,
		evenIndex = 0;
	A.forEach((item) => {
		if (item % 2 === 0) {
			res[evenIndex] = item;
			evenIndex += 2;
		}
	});
	A.forEach((item) => {
		if (item % 2 === 1) {
			res[oddIndex] = item;
			oddIndex += 2;
		}
	});
	return res;
};

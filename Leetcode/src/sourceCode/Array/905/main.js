/*
 * @Author: Sunly
 * @Date: 2020-11-12 12:25:56
 * @LastEditTime: 2020-11-12 12:35:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\905\main.js
 */
export const sortArrayByParity = (A) => {
	const odd = [],
		even = [];
	A.forEach((item) => {
		item % 2 === 0 ? even.push(item) : odd.push(item);
	});
	return even.concat(odd);
};

export const sortArrayByParity = (A) => {
	let l = 0,
		r = A.length - 1;
	while (l < r-1) {
		while (A[l] % 2 === 0) l++;
		while (A[r] % 2 === 1) r--;
		[A[l], A[r]] = [A[r], A[l]];
	}
	return A;
};

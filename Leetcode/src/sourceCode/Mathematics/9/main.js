/*
 * @Author: Sunly
 * @Date: 2020-11-06 14:52:07
 * @LastEditTime: 2020-11-06 16:12:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Number\9\main.js
 */
export const isPalindrome_1 = (x) => {
	const s = x.toString();
	let l = 0,
		r = s.length - 1;
	while (l <= r) {
		if (s[l] !== s[r]) {
			return false;
		}
		l++;
		r--;
	}
	return true;
};

export const isPalindrome_2 = (x) => {
	if (x < 0) return false;
	let origin = x;
	let palindrome = 0;
	while (origin !== 0) {
		palindrome = palindrome * 10 + (origin % 10);
		origin = ~~(origin / 10);
	}
	return palindrome === x;
};

export const isPalindrome = (x) => {
	if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
	let palindrome = 0;
	while (palindrome < x) {
		palindrome = palindrome * 10 + (x % 10);
		x = ~~(x / 10);
	}
	return x === palindrome || x === ~~(palindrome / 10);
};

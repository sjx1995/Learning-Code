/*
 * @Author: Sunly
 * @Date: 2020-10-15 20:17:41
 * @LastEditTime: 2020-10-16 10:30:54
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\125\main.js
 */
export const isPalindrome_1 = (s) => {
	let l = 0,
		r = s.length - 1;
	while (l < r) {
		if (!((s[l] >= "A" && s[l] <= "Z") || (s[l] >= "a" && s[l] <= "z") || (s[l] >= "0" && s[l] <= "9"))) {
			l++;
			continue;
		}
		if (!((s[r] >= "A" && s[r] <= "Z") || (s[r] >= "a" && s[r] <= "z") || (s[r] >= "0" && s[r] <= "9"))) {
			r--;
			continue;
		}
		if (s[l].toLowerCase() !== s[r].toLowerCase()) {
			return false;
		}
		l++;
		r--;
	}
	return true;
};

export const isPalindrome = (s) => {
	let str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	let l = 0,
		r = str.length - 1;
	while (l < r) {
		if (str[l] !== str[r]) {
			return false;
		}
		l++;
		r--;
	}
	return true;
};

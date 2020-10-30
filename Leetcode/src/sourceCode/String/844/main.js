/*
 * @Author: Sunly
 * @Date: 2020-10-19 18:51:11
 * @LastEditTime: 2020-10-20 11:32:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\844\main.js
 */
export const backspaceCompare_1 = (S, T) => {
	let arr1 = [],
		arr2 = [];
	const str1 = backspace(arr1, S);
	const str2 = backspace(arr2, T);
	return str1 === str2 ? true : false;

	function backspace(arr, str) {
		for (let i = 0; i < str.length; i++) {
			if (str[i] !== "#") {
				arr.push(str[i]);
			} else {
				if (arr.length > 0) {
					arr.pop();
				}
			}
		}
		return arr.join();
	}
};

export const backspaceCompare_2 = (S, T) => {
	let l = S.length - 1,
		r = T.length - 1;
	let s_skip = 0,
		t_skip = 0;
	while (l >= 0 || r >= 0) {
		while (l >= 0) {
			if (S[l] === "#") {
				s_skip++;
				l--;
			} else if (s_skip > 0) {
				s_skip--;
				l--;
			} else {
				break;
			}
		}
		while (r >= 0) {
			if (T[r] === "#") {
				t_skip++;
				r--;
			} else if (t_skip > 0) {
				t_skip--;
				r--;
			} else {
				break;
			}
		}
		if (l >= 0 && r >= 0) {
			if (S[l] !== T[r]) {
				return false;
			}
		}
		if ((r < 0 && l >= 0) || (r >= 0 && l < 0)) {
			return false;
		}
		l--;
		r--;
	}
	return true;
};

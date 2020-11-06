/*
 * @Author: Sunly
 * @Date: 2020-11-03 10:45:03
 * @LastEditTime: 2020-11-03 11:25:30
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\941\main.js
 */
export const vaildMountainArray_1 = (A) => {
	if (A.length < 3 || A[0] >= A[1] || A[A.length - 2] <= A[A.length - 1]) return false;
	let flag = true;
	for (let i = 0; i < A.length - 1; i++) {
		if (flag) {
			if (A[i] === A[i + 1]) return false;
			if (A[i] > A[i + 1]) {
				flag = false;
				i--;
			}
		} else {
			if (A[i] <= A[i + 1]) {
				return false;
			}
		}
	}
	return true;
};

export const vaildMountainArray = (A) => {
	if (A.length < 3) return false;
	let l = 0,
		r = A.length - 1;
	while (l < A.length) {
		if (A[l] < A[l + 1]) {
			l++;
		} else {
			break;
		}
	}
	while (r >= 0) {
		if (A[r] < A[r - 1]) {
			r--;
		} else {
			break;
		}
	}
	if (l === r && l !== A.length - 1 && r !== 0) {
		return true;
	} else {
		return false;
	}
};

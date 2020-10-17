/*
 * @Author: Sunly
 * @Date: 2020-10-16 19:38:34
 * @LastEditTime: 2020-10-16 20:13:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\796\main.js
 */
export const rotateString_1 = (A, B) => {
	if (A === "" && B === "") return true;
	const aArr = A.split("");
	const bArr = B.split("");
	for (let i = 0; i < aArr.length; i++) {
		aArr.push(aArr.shift());
		let l = 0,
			r = 0;
		while (l < aArr.length && r < bArr.length) {
			if (aArr[l] !== bArr[r]) {
				break;
			}
			l++;
			r++;
			if (l === aArr.length && r === bArr.length) {
				return true;
			}
		}
	}
	return false;
};

export const rotateString = (A, B) => {
	return A.length === B.length && (A + A).indexOf(B) > -1;
};

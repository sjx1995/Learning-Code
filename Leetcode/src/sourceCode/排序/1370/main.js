/*
 * @Author: Sunly
 * @Date: 2020-11-25 13:23:23
 * @LastEditTime: 2020-11-25 14:11:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\1370\main.js
 */
export const sortString = (s) => {
	let chars = new Array(26).fill(0);
	s.split("").forEach((char) => (chars[char.charCodeAt() - 97] += 1));
	let sortedString = "";
	while (true) {
		for (let i = 0; i < chars.length; i++) {
			if (chars[i]) {
				sortedString += String.fromCharCode(i + 97);
				chars[i]--;
			}
		}
		for (let i = chars.length - 1; i >= 0; i--) {
			if (chars[i]) {
				sortedString += String.fromCharCode(i + 97);
				chars[i]--;
			}
		}
		if (sortedString.length === s.length) return sortedString;
	}
};

/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:00:41
 * @LastEditTime: 2020-12-15 15:13:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1684\main.js
 */
export const countConsistentString = (allowed, words) => {
	let count = 0;
	for (let i = 0; i < words.length; i++) {
		let j = 0;
		for (; j < words[i].length; j++) {
			if (allowed.indexOf(words[i][j]) < 0) break;
		}
		if (j === words[i].length) count++;
	}
	return count;
};

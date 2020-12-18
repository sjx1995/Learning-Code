/*
 * @Author: Sunly
 * @Date: 2020-12-15 16:42:13
 * @LastEditTime: 2020-12-15 16:49:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\804\main.js
 */
export const uniqueMorseRepresentation = (words) => {
	const morse = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];
	const map = new Map();
	let count = 0;
	for (let i = 0; i < words.length; i++) {
		let wordToMorse = "";
		for (let j = 0; j < words[i].length; j++) {
			wordToMorse += morse[words[i][j].charCodeAt() - 97];
		}
		if (!map.has(wordToMorse)) {
			count++;
			map.set(wordToMorse, true);
		}
	}
	return count;
};

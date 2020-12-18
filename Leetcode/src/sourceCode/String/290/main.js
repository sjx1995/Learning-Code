/*
 * @Author: Sunly
 * @Date: 2020-12-16 10:09:50
 * @LastEditTime: 2020-12-16 10:44:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\290\main.js
 */
export const wordPattern = (pattern, s) => {
	const map = new Map();
	const set = new Set();
	let patternIdx = 0;
	const strArr = s.split(" ");
	if (strArr.length !== pattern.length) return false;
	while (patternIdx < pattern.length) {
		if (map.has(pattern[patternIdx])) {
			if (map.get(pattern[patternIdx]) === strArr[patternIdx]) {
				patternIdx++;
			} else {
				return false;
			}
		} else {
			if (set.has(strArr[patternIdx])) {
				return false;
			} else {
				set.add(strArr[patternIdx]);
			}
			map.set(pattern[patternIdx], strArr[patternIdx]);
			patternIdx++;
		}
	}
	return true;
};

export const wordPattern = (pattern, s) => {
	const pattern2s = new Map();
	const s2pattern = new Map();
	const strArr = s.split(" ");
	if (strArr.length !== pattern.length) return false;
	for (let i = 0; i < pattern.length; i++) {
		if (!pattern2s.has(pattern[i]) && !s2pattern.has(strArr[i])) {
			pattern2s.set(pattern[i], strArr[i]);
			s2pattern.set(strArr[i], pattern[i]);
		} else if (pattern2s.get(pattern[i]) !== strArr[i] || s2pattern.get(strArr[i]) !== pattern[i]) {
			return false;
		}
	}
	return true;
};

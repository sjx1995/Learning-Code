/*
 * @Author: Sunly
 * @Date: 2021-02-02 11:03:56
 * @LastEditTime: 2021-02-02 14:41:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\424\main.js
 */
export const characterReplacement = (s, k) => {
	let maxCount = 0;
	for (let i = 0; i < s.length; i++) {
		let diff = k;
		let j = i;
		let curCount = 0;
		while (j < s.length) {
			if (diff <= 0 && s[i] !== s[j]) break;
			if (s[j] !== s[i]) diff--;
			curCount++;
			j++;
		}
		if (diff !== 0) curCount += diff;
		maxCount = Math.max(maxCount, curCount);
	}
	return maxCount < s.length ? maxCount : s.length;
};

export const characterReplacement = (s, k) => {
	let left = 0,
		right = 0;
	const charCount = new Array(26).fill(0);
	let maxCount = 0;
	while (right < s.length) {
		charCount[s[right].charCodeAt() - 65]++;
		maxCount = Math.max(maxCount, charCount[s[right].charCodeAt() - 65]);
		if (right - left + 1 - maxCount > k) {
			charCount[s[left].charCodeAt() - 65]--;
			left++;
		}
		right++;
	}
	return right - left;
};

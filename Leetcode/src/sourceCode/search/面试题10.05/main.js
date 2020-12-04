/*
 * @Author: Sunly
 * @Date: 2020-12-01 16:14:52
 * @LastEditTime: 2020-12-01 18:06:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\search\面试题10.05\main.js
 */
export const findString_1 = (words, s) => {
	for (let i = 0; i < words.length; i++) {
		if (words[i] === s) return i;
	}
	return -1;
};

export const findString_2 = (words, s) => {
	let start = 0,
		end = words.length - 1;
	while (start < end) {
		const mid = ~~((start + end) / 2);
		if (words[mid] === s) return mid;
		else if (words[mid] !== "" && words[mid] > s) end = mid - 1;
		else if (words[mid] !== "" && words[mid] < s) start = mid + 1;
		else {
			if (words[start + 1] === s) return start + 1;
			if (words[end - 1] === s) return end - 1;
			else (start += 1) && (end -= 1);
		}
	}
	return -1;
};

export const findString = (words, s) => {
	let start = 0,
		end = words.length - 1;
	while (start <= end) {
		let mid = ~~((start + end) / 2);
		const tempMid = mid;
		while (words[mid] === "" && mid <= end) mid++;
		if (mid === end + 1) {
			end = tempMid - 1;
			continue;
		}
		if (words[mid] === s) return mid;
		else if (words[mid] < s) start = mid + 1;
		else if (words[mid] > s) end = mid - 1;
	}
	return -1;
};

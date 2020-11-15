/*
 * @Author: Sunly
 * @Date: 2020-11-06 18:52:17
 * @LastEditTime: 2020-11-09 10:37:48
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\28\main.js
 */
export const strStr_1 = (haystack, needle) => {
	if (needle === "") return 0;
	let i = 0,
		j = 0;
	while (i < haystack.length) {
		if (haystack[i] === needle[j]) {
			let haystackIndex = i;
			while (haystack[haystackIndex] && needle[j] && haystack[haystackIndex] === needle[j]) {
				haystackIndex++;
				j++;
			}
			if (j === needle.length) return i;
			j = 0;
		}
		i++;
	}
	return -1;
};

export const strStr_2 = (haystack, needle) => {
	return haystack.indexOf(needle);
};

export const strStr = (haystack, needle) => {
	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		if (haystack.substring(i, i + needle.length) === needle) return i;
	}
	return -1;
};

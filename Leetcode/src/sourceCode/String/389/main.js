/*
 * @Author: Sunly
 * @Date: 2020-12-18 10:33:06
 * @LastEditTime: 2020-12-18 10:58:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\389\main.js
 */

export const findTheDifference = (s, t) => {
	const arr = new Array(26).fill(0);
	Array.prototype.forEach.call(t, (n) => arr[n.charCodeAt() - 97]++);
	Array.prototype.forEach.call(s, (n) => arr[n.charCodeAt() - 97]--);
	return String.fromCharCode(arr.indexOf(1) + 97);
};

export const findTheDifference = (s, t) => {
	return String.fromCharCode(
		Array.prototype.reduce.call(t, (acc, cur) => (acc += cur.charCodeAt()), 0) -
			Array.prototype.reduce.call(s, (acc, cur) => (acc += cur.charCodeAt()), 0)
	);
};

export const findTheDifference = (s, t) => {
	let ret = 0;
	Array.prototype.forEach.call(s, (n) => (ret ^= n.charCodeAt()));
	Array.prototype.forEach.call(t, (n) => (ret ^= n.charCodeAt()));
	return String.fromCharCode(ret);
};

/*
 * @Author: Sunly
 * @Date: 2020-11-17 19:43:10
 * @LastEditTime: 2020-11-17 20:04:21
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\1290\main.js
 */
export const getDecimalValue = (head) => {
	let s = "";
	while (head) {
		s += head.val;
		head = head.next;
	}
	return parseInt(s, 2);
};

export const getDecimalValue = (head) => {
	function recursion(head, digit, total) {
		if (!head.next) return [head.val ? 1 : 0, 0];
		[total, digit] = recursion(head.next);
		return [head.val ? total + 2 ** (digit + 1) : total, ++digit];
	}
	let [res, digit] = recursion(head, 0, 0);
	return res;
};

export const getDecimalValue = (head) => {
	let num = 0;
	while (head) {
		num = num * 2 + head.val;
		head = head.next;
	}
	return num;
};

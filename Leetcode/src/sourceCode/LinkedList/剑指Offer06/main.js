/*
 * @Author: Sunly
 * @Date: 2020-11-18 18:41:56
 * @LastEditTime: 2020-11-18 18:54:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\剑指Offer06\main.js
 */
export const reversePrint = (head) => {
	const arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	return arr.reverse();
};

export const reversePrint = (head) => {
	if (!head) return [];
	let arr = reversePrint(head.next);
	arr.push(head.val);
	return arr;
};

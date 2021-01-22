/*
 * @Author: Sunly
 * @Date: 2021-01-20 15:41:13
 * @LastEditTime: 2021-01-20 15:41:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\1669\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var mergeInBetween = function (list1, a, b, list2) {
	let sentinel = new ListNode();
	sentinel.next = list1;
	let cutStart = sentinel,
		cutEnd;
	for (let i = 0; i <= b; i++) {
		if (i === a - 1) cutStart = list1;
		if (i === b) cutEnd = list1.next;
		list1 = list1.next;
	}
	cutStart.next = list2;
	while (list2.next) {
		list2 = list2.next;
	}
	list2.next = cutEnd;
	return sentinel.next;
};

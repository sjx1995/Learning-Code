/*
 * @Author: Sunly
 * @Date: 2021-01-20 16:56:37
 * @LastEditTime: 2021-01-20 18:01:33
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\86\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const partition = (head, k) => {
	let sentinel = new ListNode();
	sentinel.next = head;
	let node = sentinel;
	let smallHead = new ListNode();
	let sentinelSmall = smallHead;
	while (node.next) {
		if (node.next.val < x) {
			smallHead.next = node.next;
			node.next = node.next.next;
			smallHead = smallHead.next;
		} else {
			node = node.next;
		}
	}
	smallHead.next = sentinel.next;
	return sentinelSmall.next;
};

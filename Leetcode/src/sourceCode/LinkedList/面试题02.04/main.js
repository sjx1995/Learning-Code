/*
 * @Author: Sunly
 * @Date: 2021-01-20 17:59:00
 * @LastEditTime: 2021-01-20 18:09:28
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.04\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var partition = (head, x) => {
	let bigHead = new ListNode();
	bigHead.next = head;
	let bigNode = bigHead;
	let smallHead = new ListNode();
	let smallNode = smallHead;
	while (bigNode.next) {
		if (bigNode.next.val < x) {
			smallNode.next = bigNode.next;
			bigNode.next = bigNode.next.next;
			smallNode = smallNode.next;
		} else {
			bigNode = bigNode.next;
		}
	}
	smallNode.next = bigHead.next;
	return smallHead.next;
};

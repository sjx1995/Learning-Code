/*
 * @Author: Sunly
 * @Date: 2021-01-21 11:32:06
 * @LastEditTime: 2021-03-25 15:20:29
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\82\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const deleteDuplicates = head => {
	if (!head || !head.next) return head;
	let node = new ListNode(null, head);
	let sentinel = node;
	while (node.next && node.next.next) {
		if (node.next.val === node.next.next.val) {
			let curNode = node.next;
			while (curNode.next && curNode.val === curNode.next.val) curNode = curNode.next;
			node.next = curNode.next;
		} else {
			node = node.next;
		}
	}
	return sentinel.next;
};

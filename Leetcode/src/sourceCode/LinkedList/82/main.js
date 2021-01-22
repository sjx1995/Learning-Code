/*
 * @Author: Sunly
 * @Date: 2021-01-21 11:32:06
 * @LastEditTime: 2021-01-21 11:56:06
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
const deleteDuplicates = (head) => {
	if (!head || !head.next) return head;
	let sentinel = new ListNode();
	sentinel.next = head;
	let node = sentinel;
	while (node.next && node.next.next) {
		if (node.next.val !== node.next.next.val) {
			node = node.next;
		} else {
			let notSame = node.next.next;
			while (notSame && notSame.val === node.next.val) {
				notSame = notSame.next;
			}
			node.next = notSame;
		}
	}
	return sentinel.next;
};

/*
 * @Author: Sunly
 * @Date: 2021-01-20 18:15:53
 * @LastEditTime: 2021-01-20 18:36:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\143\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const reorderList = (head) => {
	if (!head || !head.next) return head;
	// 寻找中点，分隔链表
	let fast = head;
	let slow = new ListNode();
	slow.next = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	let mid = slow.next;
	slow.next = null;
	// 反转后半部分链表
	const recursion = (node) => {
		if (!node.next) return node;
		let reverseHead = recursion(node.next);
		node.next.next = node;
		node.next = null;
		return reverseHead;
	};
	// 将后半部分插入到前半部分
	let frontNode = head;
	let reverseNode = recursion(mid);
	while (frontNode.next && reverseNode.next) {
		const insertedNode = reverseNode;
		const insertedNextNode = frontNode.next;
		reverseNode = reverseNode.next;
		frontNode.next = insertedNode;
		insertedNode.next = insertedNextNode;
		frontNode = frontNode.next.next;
	}
	if (reverseNode) frontNode.next = reverseNode;
	return head;
};

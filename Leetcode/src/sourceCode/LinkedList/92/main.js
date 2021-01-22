/*
 * @Author: Sunly
 * @Date: 2021-01-21 12:14:22
 * @LastEditTime: 2021-01-21 16:12:20
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\92\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const reverseBetween = (head, m, n) => {
	if (!head || !head.next) return head;
	let sentinel = new ListNode(0, head);
	let node = sentinel;
	let start = m;
	while (--start > 1) {
		node = node.next;
	}
	let reverseBefore = node;
	let reverseEnd = node.next;
	let reverseHead, reverseNext;
	const reverse = (node, k) => {
		if (k === n) {
			reverseNext = node.next;
			return node;
		}
		let reverseHead = reverse(node.next, k + 1);
		node.next.next = node;
		node.next = null;
		return reverseHead;
	};
	reverseHead = reverse(reverseEnd, m);
	reverseBefore.next = reverseHead;
	reverseEnd.next = reverseNext;
	return sentinel.next;
};

const reverseBetween = (head, m, n) => {
	if (!head) return head;
	let sentinel = new ListNode(0, head);
	let node = sentinel;
	let start = m;
	while (--start > 0) {
		node = node.next;
	}
	let reverseBefore = node;
	let reverseEnd = node.next;
	let pre = node;
	let cur = node.next;
	let next = null;
	while (m++ <= n) {
		next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
	reverseBefore.next = pre;
	reverseEnd.next = cur;
	return sentinel.next;
};

const reverseBetween = (head, m, n) => {
	if (!head) return head;
	let cur = head,
		pre = null;
	while (m > 1) {
		pre = cur;
		cur = cur.next;
		m--;
		n--;
	}
	let con = pre,
		tail = cur;
	let third = null;
	while (n > 0) {
		third = cur.next;
		cur.next = pre;
		pre = cur;
		cur = third;
		n--;
	}
	if (con) {
		con.next = pre;
	} else {
		head = pre;
	}
	tail.next = cur;
	return head;
};

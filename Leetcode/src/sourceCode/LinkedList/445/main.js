/*
 * @Author: Sunly
 * @Date: 2021-01-20 19:01:56
 * @LastEditTime: 2021-01-20 19:57:53
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\445\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const addTwonumbers = (l1, l2) => {
	const stack1 = [],
		stack2 = [];
	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}
	const sentinel = new ListNode();
	let node = sentinel;
	let carry = 0;
	while (stack1.length && stack2.length) {
		const index = stack1.pop() + stack2.pop() + carry;
		node.next = new ListNode(index % 10);
		carry = ~~(index / 10);
		node = node.next;
	}
	while (stack1.length) {
		const index = stack1.pop() + carry;
		node.next = new ListNode(index % 10);
		carry = ~~(index / 10);
		node = node.next;
	}
	while (stack2.length) {
		const index = stack2.pop() + carry;
		node.next = new ListNode(index % 10);
		carry = ~~(index / 10);
		node = node.next;
	}
	if (carry !== 0) {
		node.next = new ListNode(carry);
	}
	const reverse = (node) => {
		if (!node.next) return node;
		let head = reverse(node.next);
		node.next.next = node;
		node.next = null;
		return head;
	};
	return reverse(sentinel.next);
};

const addTwonumbers = (l1, l2) => {
	const stack1 = [],
		stack2 = [];
	while (l1) {
		stack1.push(l1.val);
		l1 = l1.next;
	}
	while (l2) {
		stack2.push(l2.val);
		l2 = l2.next;
	}

	let carry = 0;
	let res = null;
	while (stack1.length || stack2.length || carry !== 0) {
		const num1 = stack1.length ? stack1.pop() : 0;
		const num2 = stack2.length ? stack2.pop() : 0;
		const index = num1 + num2 + carry;
		let curNode = new ListNode(index % 10);
		carry = ~~(carry / 10);
		curNode.next = res;
		res = curNode;
	}
	return res;
};

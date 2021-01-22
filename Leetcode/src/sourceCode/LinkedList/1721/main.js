/*
 * @Author: Sunly
 * @Date: 2021-01-20 15:41:45
 * @LastEditTime: 2021-01-20 16:30:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\1721\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const swapNodes = (head, k) => {
	const arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	let num1 = arr[k - 1],
		num2 = arr[arr.length - k];
	arr[k - 1] = num2;
	arr[arr.length - k] = num1;
	let sentinel = new ListNode();
	let node = sentinel;
	while (arr.length) {
		let num = arr.shift();
		node.next = new ListNode(num);
		node = node.next;
	}
	return sentinel.next;
};

const swapNodes = (head, k) => {
	let fast = head,
		slow = head;
	let temp;
	while (k > 1) {
		fast = fast.next;
		k--;
	}
	temp = fast;
	while (fast.next) {
		slow = slow.next;
		fast = fast.next;
	}
	const swapVal = slow.val;
	slow.val = temp.val;
	temp.val = swapVal;
	return head;
};

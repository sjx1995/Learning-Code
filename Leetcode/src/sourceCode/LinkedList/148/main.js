/*
 * @Author: Sunly
 * @Date: 2020-11-25 15:39:18
 * @LastEditTime: 2020-11-25 16:07:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\148\main.js
 */
export const sortList = (head) => {
	if (!head || !head.next) return head;
	let slow = head,
		fast = head.next.next;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow;
	}
	let middleHead = slow.next;
	slow.next = null;
	return merge(sortList(head), sortList(middleHead));
};
const merge = (left, right) => {
	let sentinel = new ListNode();
	let node = sentinel;
	while (left && right) {
		if (left.val <= right.val) {
			node.next = left;
			left = left.next;
			node = node.next;
		} else {
			node.next = right;
			right = right.next;
			node = ndoe.next;
		}
	}
	if (left) {
		node.next = left;
	}
	if (right) {
		node.next = right;
	}
	return sentinel.next;
};

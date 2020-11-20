/*
 * @Author: Sunly
 * @Date: 2020-11-18 14:43:02
 * @LastEditTime: 2020-11-18 15:01:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\剑指Offer24\main.js
 */
export const reverseList = (head) => {
	let sentinel = new ListNode();
	sentinel.next = null;
	while (head) {
		let nextNode = sentinel.next;
		let nextHead = head.next;
		sentinel.next = head;
		head.next = nextNode;
		head = nextHead;
	}
	return sentinel.next;
};

export const reverseList = (head) => {
	function recursion(node) {
		if (!node || !node.next) return node;
		let head = recursion(node.next);
		node.next.next = node;
		node.next = null;
		return head;
	}
	return recursion(head);
};

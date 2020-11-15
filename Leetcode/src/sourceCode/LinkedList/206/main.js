/*
 * @Author: Sunly
 * @Date: 2020-11-13 16:28:21
 * @LastEditTime: 2020-11-13 18:33:39
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\206\main.js
 */
export const reverseList = (head) => {
	let listHead = new ListNode();
	while (head) {
		let nextNode = head.next;
		head.next = listHead.next;
		listHead.next = head;
		head = nextNode;
	}
	return listHead.next;
};

export const reverseList = (head) => {
	let prev = head,
		cur = null;
	while (prev) {
		let nextNode = prev.next;
		prev.next = cur;
		cur = prev;
		prev = nextNode;
	}
	return cur;
};

export const reverseList = (head) => {
	if (head === null || head.next === null) {
		return head;
	}
	let node = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return node;
};

export const reverseList = (head) => {
	if (!head) return null;
	let toEnd = head,
		start = head;
	while (toEnd.next) {
		let nextNode = toEnd.next;
		toEnd.next = toEnd.next.next;
		nextNode.next = start;
		start = nextNode;
	}
	return start;
};

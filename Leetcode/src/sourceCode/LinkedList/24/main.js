/*
 * @Author: Sunly
 * @Date: 2020-11-20 12:30:51
 * @LastEditTime: 2020-11-20 12:35:05
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\24\main.js
 */
export const swapPairs = (head) => {
	if (!head || !head.next) return head;
	let sentinel = new ListNode();
	let sentinelNode = sentinel;
	sentinel.next = head;
	while (head && head.next) {
		let firstNode = head;
		let nextNode = head.next.next;
		sentinelNode.next = head.next;
		sentinelNode.next.next = firstNode;
		firstNode.next = nextNode;
		head = nextNode;
		sentinelNode = firstNode;
	}
	return sentinel.next;
};

export const swapPairs = (head) => {
	if (!head || !head.next) return head;
	let newHead = head.next;
	head.next = swapPairs(head.next.next);
	newHead.next = head;
	return newHead;
};

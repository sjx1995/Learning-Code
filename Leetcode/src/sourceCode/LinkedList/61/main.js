/*
 * @Author: Sunly
 * @Date: 2020-11-19 18:20:06
 * @LastEditTime: 2020-11-20 10:19:43
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\61\main.js
 */
export const rotateRight = (head, k) => {
	const counts = [];
	while (head) {
		counts.push(head.val);
		head = head.next;
	}
	let rotateCount = k % counts.length;
	while (rotateCount--) {
		counts.unshift(counts.pop());
	}
	let rotatedList = new ListNode(),
		rotatedHead = rotatedList;
	for (let i = 0; i < counts.length; i++) {
		rotatedList.next = new ListNode(counts[i]);
		rotatedList = rotatedList.next;
	}
	return rotatedHead.next;
};

export const rotateRight = (head, k) => {
	const counts = [];
	let node = head;
	while (node) {
		counts.push(node.val);
		node = node.next;
	}
	let rotateCount = k % counts.length;
	let rotateNumbers = counts.slice(counts.length - rotateCount);
	let rotatedList = new ListNode(),
		rotatedHead = rotatedList;
	for (let i = 0; i < rotateNumbers.length; i++) {
		rotatedList.next = new ListNode(rotateNumbers[i]);
		rotatedList = rotatedList.next;
	}
	rotatedList.next = head;
	for (let moveCount = counts.length - rotateCount; moveCount >= 0; moveCount--) {
		rotatedList = rotatedList.next;
	}
	rotatedList.next = null;
	return rotatedHead.next;
};

export const rotateRight = (head, k) => {
	if (!head || !head.next) return head;
	let originHead = head,
		length = 1;
	while (head.next) {
		head = head.next;
		length++;
	}
	let endNode = head;
	endNode.next = originHead;
	let moveCount = length - (k % length);
	while (moveCount--) {
		originHead = originHead.next;
		endNode = endNode.next;
	}
	endNode.next = null;
	return originHead;
};

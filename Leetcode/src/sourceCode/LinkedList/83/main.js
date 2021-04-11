/*
 * @Author: Sunly
 * @Date: 2020-11-18 15:09:09
 * @LastEditTime: 2021-03-26 11:04:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\83\main.js
 */
export const deleteDuplicates = head => {
	let sentinel = new ListNode(NaN);
	sentinel.next = head;
	let prev = sentinel,
		cur = head;
	while (cur) {
		if (prev.val === cur.val) {
			cur = cur.next;
		} else {
			prev.next = cur;
			prev = cur;
			cur = cur.next;
		}
	}
	prev.next = cur;
	return sentinel.next;
};

export const deleteDuplicates = head => {
	const arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	const noRepetition = [...new Set(arr)];
	let listHead = new ListNode();
	noRepHead = listHead;
	noRepetition.forEach(item => {
		listHead.next = new ListNode(item);
		listHead = listHead.next;
	});
	listHead.next = null;
	return noRepHead.next;
};

export const deleteDuplicates = head => {
	if (!head || !head.next) return head;
	let node = head;
	while (node.next) {
		if (node.val === node.next.val) {
			node.next = node.next.next;
		} else {
			node = node.next;
		}
	}
	return head;
};

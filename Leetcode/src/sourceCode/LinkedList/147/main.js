/*
 * @Author: Sunly
 * @Date: 2020-11-25 14:21:14
 * @LastEditTime: 2020-11-25 15:14:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\147\main.js
 */
export const insertionSortList = (head) => {
	if (!head || !head.next) return head;
	let sentinel = new ListNode();
	sentinel.next = head;
	while (head && head.next) {
		let current = head.next;
		if (current.val >= head.val) {
			head = head.next;
		} else {
			let index = sentinel;
			while (index.next.val < current.val) {
				index = index.next;
			}
			head.next = head.next ? head.next.next : null;
			current.next = index.next;
			index.next = current;
		}
	}
	return sentinel.next;
};

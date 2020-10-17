/*
 * @Author: Sunly
 * @Date: 2020-10-10 11:43:12
 * @LastEditTime: 2020-10-13 12:16:54
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\19\main.js
 */
export const removeNthFromEnd = (head, n) => {
	let fast = head,
		slow = head;
	while (--n) {
		fast = fast.next;
	}
	if (!fast.next) {
		return head.next;
	}
	fast = fast.next;
	while (fast.next) {
		fast = fast.next;
		slow = slow.next;
	}
	slow.next = slow.next.next;
	return head;
};

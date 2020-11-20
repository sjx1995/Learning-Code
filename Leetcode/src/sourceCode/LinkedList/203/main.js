/*
 * @Author: Sunly
 * @Date: 2020-11-16 18:10:23
 * @LastEditTime: 2020-11-17 18:57:58
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\203\main.js
 */
export const removeElements = (head, val) => {
	if (!head) return null;
	head.next = removeElements(head.next, val);
	return head.val === val ? head.next : head;
};

export const removeElements = (head, val) => {
	let sentinel = new ListNode();
	sentinel.next = head;
	let prev = sentinel,
		cur = head;
	while (cur) {
		if (cur.val === val) {
			prev.next = cur.next;
		} else {
			prev.next = cur;
		}
		cur = cur.next;
	}
	return sentinel.next;
};

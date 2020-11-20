/*
 * @Author: Sunly
 * @Date: 2020-11-18 16:57:45
 * @LastEditTime: 2020-11-18 17:21:10
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.01\main.js
 */
export const removeDuplicateNodes = (head) => {
	const set = new Set();
	let sentinel = new ListNode(NaN);
	sentinel.next = head;
	let prev = sentinel,
		cur = head;
	while (cur) {
		if (set.has(cur.val)) {
			cur = cur.next;
			prev.next = cur;
		} else {
			set.add(cur.val);
			cur = cur.next;
			prev = prev.next;
		}
	}
	return sentinel.next;
};

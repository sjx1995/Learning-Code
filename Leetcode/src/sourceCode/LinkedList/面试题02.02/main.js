/*
 * @Author: Sunly
 * @Date: 2020-11-13 11:49:21
 * @LastEditTime: 2020-11-13 11:59:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.02\main.js
 */
export const kthToLast = (head, k) => {
	let fast = head,
		slow = head;
	for (let i = 0; i < k - 1; i++) {
		slow = slow.next;
	}
	while (slow.next) {
		slow = slow.next;
		fast = fast.next;
	}
	return fast.val;
};

export const kthToLast = (head, k) => {
	const stack = [];
	while (head) {
		stack.push(head.val);
		head = head.next;
	}
	while (--k) {
		stack.pop();
	}
	return stack.pop();
};

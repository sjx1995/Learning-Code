/*
 * @Author: Sunly
 * @Date: 2020-11-18 17:25:59
 * @LastEditTime: 2020-11-18 18:29:50
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\141\main.js
 */
export const hasCycle = (head) => {
	const set = new Set();
	let node = head;
	while (node) {
		if (set.has(node)) {
			return true;
		} else {
			set.add(node);
		}
		node = node.next;
	}
	return false;
};

export const hasCycle = (head) => {
	if (!head || !head.next) return false;
	let fast = head.next,
		slow = head;
	while (fast && fast.next) {
		if (fast === slow) return true;
		fast = fast.next.next;
		slow = slow.next;
	}
	return false;
};

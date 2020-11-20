/*
 * @Author: Sunly
 * @Date: 2020-11-16 15:47:22
 * @LastEditTime: 2020-11-16 16:30:48
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\剑指Offer18\main.js
 */
export const deleteNode = (head, val) => {
	if (head.val === val) return head.next;
	let node = head;
	while (node.next) {
		if (node.next.val === val) {
			node.next = node.next.next;
			return head;
		}
		node = node.next;
	}
};

export const deleteNode = (head, val) => {
	if (head.val === val) return head.next;
	head.next = deleteNode(head.next, val);
	return head;
};

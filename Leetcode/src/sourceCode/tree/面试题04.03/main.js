/*
 * @Author: Sunly
 * @Date: 2021-01-07 18:05:15
 * @LastEditTime: 2021-01-07 18:31:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\面试题04.03\main.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 广度
export const listOfDepth = (tree) => {
	if (!tree) return [];
	const res = [];
	const queue = [tree];
	let node = null,
		head = null;
	while (queue.length) {
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			const treeNode = queue.shift();
			if (i === 0) {
				head = new ListNode(treeNode.val);
				node = head;
			} else {
				node.next = new ListNode(treeNode.val);
				node = node.next;
			}
			if (treeNode.left) queue.push(treeNode.left);
			if (treeNode.right) queue.push(treeNode.right);
		}
		res.push(head);
	}
	return res;
};

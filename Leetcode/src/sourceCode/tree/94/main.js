/*
 * @Author: Sunly
 * @Date: 2020-12-22 18:10:33
 * @LastEditTime: 2020-12-22 19:35:16
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\94\main.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
export const inorderTraversal = (root) => {
	if (!root) return [];
	const res = [];
	const recursion = (node) => {
		if (node) {
			recursion(node.left);
			res.push(node.val);
			recursion(node.right);
		}
	};
	recursion(root);
	return res;
};

export const inorderTraversal = (root) => {
	if (!root) return [];
	const stack = [];
	const res = [];
	while (root || stack.length) {
		while (root) {
			stack.push(root);
			root = root.left;
		}
		const curNode = stack.pop();
		res.push(curNode.val);
		root = curNode.right;
	}
	return res;
};

export const inorderTraversal = (root) => {
	const res = [];
	let node = root;
	while (node) {
		if (!node.left) {
			res.push(node.val);
			node = node.right;
		}
		if (node.left) {
			let predecessor = node.left;
			while (predecessor.right && predecessor.right !== root) predecessor = predecessor.right;
			if (!predecessor.right) {
				predecessor.right = node;
				node = node.left;
			} else {
				predecessor.right = null;
				res.push(node.val);
				node = node.right;
			}
		}
	}
	return res;
};

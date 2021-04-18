/*
 * @Author: Sunly
 * @Date: 2021-04-13 10:27:01
 * @LastEditTime: 2021-04-13 11:11:38
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\783\main.js
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const minDiffInBST = root => {
	let values = [];
	function BST(node) {
		if (node) {
			values.push(node.val);
			if (node.left) BST(node.left);
			if (node.right) BST(node.right);
		}
	}
	BST(root);
	let min = Infinity;
	values.sort((a, b) => a - b);
	for (let i = 1; i < values.length; i++) {
		min = Math.min(min, values[i] - values[i - 1]);
	}
	return min;
};

const minDiffInBST = root => {
	let min = Infinity,
		pre = -1;
	function BST(node) {
		if (!node) return;
		BST(node.left);
		if (pre !== -1) min = Math.min(min, node.val - pre);
		pre = node.val;
		BST(node.right);
	}
	BST(root);
	return min;
};

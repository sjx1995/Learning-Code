/*
 * @Author: Sunly
 * @Date: 2021-01-13 19:06:24
 * @LastEditTime: 2021-01-13 19:13:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\515\main.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
export const largestValues = (root) => {
	if (!root) return [];
	const res = [];
	const queue = [root];
	while (queue.length) {
		const size = queue.length;
		let curMax = -Infinity;
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			curMax = Math.max(curMax, node.val);
		}
		res.push(curMax);
	}
	return res;
};

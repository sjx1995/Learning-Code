/*
 * @Author: Sunly
 * @Date: 2020-12-22 11:43:37
 * @LastEditTime: 2020-12-22 17:04:51
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\103\main.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export const zigzagLevelOrder = function (root) {
	if (!root) return [];
	const stack = [root];
	const res = [];
	let fromLeft = true;
	while (stack.length) {
		const nextRow = [];
		res.push([]);
		while (stack.length) {
			const curNode = stack.pop();
			res[res.length - 1].push(curNode.val);
			if (fromLeft) {
				if (curNode.left) nextRow.push(curNode.left);
				if (curNode.right) nextRow.push(curNode.right);
			} else {
				if (curNode.right) nextRow.push(curNode.right);
				if (curNode.left) nextRow.push(curNode.left);
			}
		}
		fromLeft = !fromLeft;
		stack.push(...nextRow);
	}
	return res;
};

/*
 * @Author: Sunly
 * @Date: 2021-01-13 18:52:02
 * @LastEditTime: 2021-01-13 19:02:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\1161\main.js
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
export const maxLevelSum = (root) => {
	const queue = [root];
	let curRow = 1,
		maxRow = 1,
		maxCount = root.val;
	while (queue.length) {
		const size = queue.length;
		let curCount = 0;
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			curCount += node.val;
		}
		if (curCount > maxCount) {
			maxRow = curRow;
			maxCount = curCount;
		}
		curRow++;
	}
	return maxRow;
};

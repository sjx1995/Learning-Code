/*
 * @Author: Sunly
 * @Date: 2021-01-13 18:36:36
 * @LastEditTime: 2021-01-13 18:48:56
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\429\main.js
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
export const levelOrder = (root) => {
	if (!root) return [];
	const res = [];
	const queue = [root];
	while (queue.length) {
		const size = queue.length;
		res.push([]);
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.children.length) {
				node.children.forEach((item) => queue.push(item));
			}
			res[res.length - 1].push(node.val);
		}
	}
	return res;
};

/*
 * @Author: Sunly
 * @Date: 2021-01-07 16:20:13
 * @LastEditTime: 2021-01-07 17:01:08
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\559\main.js
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

// 广度优先遍历
export const maxDepth = (root) => {
	if (!root) return 0;
	let dep = 0;
	let queue = [root];
	while (queue.length) {
		dep++;
		const len = queue.length;
		for (let i = 0; i < len; i++) {
			const curNode = queue.shift();
			if (curNode.children.length) {
				queue.push(...curNode.children);
			}
		}
	}
	return dep++;
};

// 深度优先遍历
export const maxDepth = (root) => {
	if (!root) return 0;
	let curDep = 1,
		maxDep = 1;
	const rec = (root, depth) => {
		maxDep = Math.max(maxDep, depth);
		if (root.children.length) {
			root.children.forEach((node) => rec(node, depth + 1));
		}
	};
	rec(root, curDep);
	return maxDep;
};

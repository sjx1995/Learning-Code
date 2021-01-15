/*
 * @Author: Sunly
 * @Date: 2021-01-13 18:31:26
 * @LastEditTime: 2021-01-13 18:35:37
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\剑指Offer32-II\main.js
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
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			res[res.length - 1].push(node.val);
		}
	}
	return res;
};

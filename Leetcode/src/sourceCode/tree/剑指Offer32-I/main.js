/*
 * @Author: Sunly
 * @Date: 2021-01-13 19:14:32
 * @LastEditTime: 2021-01-13 19:19:47
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\剑指Offer32-I\main.js
 */
export const levelOrder = (root) => {
	if (!root) return [];
	const res = [];
	const queue = [root];
	while (queue.length) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			res.push(node.val);
		}
	}
	return res;
};

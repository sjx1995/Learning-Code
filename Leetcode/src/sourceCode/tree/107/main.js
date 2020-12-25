/*
 * @Author: Sunly
 * @Date: 2020-12-23 14:29:16
 * @LastEditTime: 2020-12-23 14:36:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\107\main.js
 */
export const levelOrderBottom = (root) => {
	if (!root) return [];
	const values = [];
	const queue = [root];
	while (queue.length) {
		const nextRow = [];
		values.unshift([]);
		while (queue.length) {
			const node = queue.shift();
			values[0].push(node.val);
			if (node.left) nextRow.push(node.left);
			if (node.right) nextRow.push(node.right);
		}
		queue.push(...nextRow);
	}
	return values;
};

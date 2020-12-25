/*
 * @Author: Sunly
 * @Date: 2020-12-22 16:45:16
 * @LastEditTime: 2020-12-22 17:02:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\102\main.js
 */
export const levelOrder = (root) => {
	if (!root) return [];
	const queue = [];
	const res = [];
	while (true) {
		if (!queue.length) break;
		const nextRow = [];
		res.push([]);
		while (queue.length) {
			const curNode = queue.shift();
			res[res.length - 1].push(curNode.val);
			if (curNode.left) nextRow.push(curNode.left);
			if (curNode.right) nextRow.push(curNode.right);
		}
		queue.push(...nextRow);
	}
	return res;
};

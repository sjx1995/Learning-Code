/*
 * @Author: Sunly
 * @Date: 2020-12-29 17:29:38
 * @LastEditTime: 2020-12-29 18:07:21
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\111\main.js
 */
export const minDepth = (root) => {
	if (!root) return 0;
	const queue = [root];
	let depth = 0;
	while (queue.length) {
		const nextRow = [];
		depth++;
		while (queue.length) {
			const curNode = queue.shift();
			if (!curNode.left && !curNode.right) return depth;
			if (curNode.left) nextRow.push(curNode.left);
			if (curNode.right) nextRow.push(curNode.right);
		}
		queue.push(...nextRow);
	}
};

export const minDepth = (root) => {
	if (!root) return 0;
	if (!root.left && !root.right) return 1;
	const depLeft = minDepth(root.left);
	const depRight = minDepth(root.right);
	if (!root.left || !root.right) return depLeft + depRight + 1;
	return Math.min(depLeft, depRight) + 1;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-30 16:02:25
 * @LastEditTime: 2020-12-30 17:38:57
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\199\main.js
 */
export const rightSideView = (root) => {
	if (!root) return [];
	const views = [];
	const queue = [root];
	while (queue.length) {
		const size = queue.length;
		let curNode;
		for (let i = 0; i < size; i++) {
			curNode = queue.shift();
			if (curNode.left) queue.push(curNode.left);
			if (curNode.right) queue.push(curNode.right);
		}
		views.push(curNode.val);
	}
	return views;
};

export const rightSideView = (root) => {
	const res = [];
	let depth = 0;
	const dfs = (node, depth) => {
		if (!node) return node;
		if (!res[depth]) {
			res[depth] = node.val;
		}
		dfs(node.right, depth + 1);
		dfs(node.left, depth + 1);
	};
	dfs(root, depth);
	return res;
};

/*
 * @Author: Sunly
 * @Date: 2020-12-23 15:34:09
 * @LastEditTime: 2020-12-23 15:39:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\144\main.js
 */
const preorderTraversal = (root) => {
	if (!root) return [];
	const res = [];
	const recursion = (node) => {
		res.push(node.val);
		if (node.left) recursion(node.left);
		if (node.right) recursion(node.right);
	};
	recursion(root);
	return res;
};

const preorderTraversal = (root) => {
	if (!root) return [];
	const res = [];
	const stack = [root];
	while (stack.length) {
		const node = stack.pop();
		res.push(node.val);
		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
	}
	return res;
};

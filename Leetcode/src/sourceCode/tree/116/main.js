/*
 * @Author: Sunly
 * @Date: 2020-12-28 15:33:21
 * @LastEditTime: 2020-12-29 15:10:14
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\116\main.js
 */
export const connect = (root) => {
	if (!root) return root;
	const curRow = [root];
	const res = [];
	while (curRow.length) {
		const nextRow = [];
		while (curRow.length) {
			const curNode = curRow.shift();
			if (curRow[0] != null) curNode.next = curRow[0];
			if (curNode.left) nextRow.push(curNode.left);
			if (curNode.right) nextRow.push(curNode.right);
		}
		curRow.push(...nextRow);
	}
	return root;
};

export const connect = (root) => {
	if (!root) return root;
	const queue = [root];
	while (queue.length) {
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const curNode = queue.shift();
			if (i < size - 1) curNode.next = queue[0];
			if (curNode.left) queue.push(curNode.left);
			if (curNode.right) queue.push(curNode.right);
		}
	}
	return root;
};

export const connect = (root) => {
	if (!root) return root;
	let leftNode = root;
	while (leftNode.left) {
		let head = leftNode;
		while (head) {
			head.left.next = head.right;
			if (head.next) head.right.next = head.next.left;
			head = head.next;
		}
		leftNode = leftNode.left;
	}
	return root;
};

export const connect = (root) => {
	const dfs = (node) => {
		if (!node) return node;
		let left = node.left;
		let right = node.right;
		while (left) {
			left.next = right;
			left = left.right;
			right = right.left;
		}
		dfs(node.left);
		dfs(node.right);
	};
	dfs(root);
	return root;
};

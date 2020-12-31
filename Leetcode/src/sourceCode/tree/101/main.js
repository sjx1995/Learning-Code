/*
 * @Author: Sunly
 * @Date: 2020-12-29 15:12:49
 * @LastEditTime: 2020-12-29 17:29:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\101\main.js
 */
export const isSymmetric = (root) => {
	if (!root) return root;
	let queue = [root];
	while (queue.length) {
		const size = queue.length;
		let start = 0,
			end = size - 1;
		const nextRowLeft = [],
			nextRowRight = [];
		while (start <= end) {
			console.log(queue);
			if (
				(!queue[start].left && queue[end].right) ||
				(queue[start].left && !queue[end].right) ||
				(!queue[start].right && queue[end].left) ||
				(queue[start].right && !queue[end].left) ||
				(queue[start].left && queue[end].right && queue[start].left.val === queue[end].right.val) ||
				(queue[start].right && queue[end].left && queue[start].right.val === queue[end].left.val)
			)
				return false;
			if (queue[start].left) nextRowLeft.push(queue[start].left);
			if (queue[start].right) nextRowLeft.push(queue[start].right);
			if (queue[end].right) nextRowRight.unshift(queue[end].right);
			if (queue[end].left) nextRowRight.unshift(queue[end].left);
			start++;
			end--;
		}
		queue = [...nextRowLeft, ...nextRowRight];
	}
	return true;
};

export const isSymmetric = (root) => {
	if (!root) return true;
	const left = [],
		right = [];
	const dfsLeft = (node) => {
		if (!node) return node;
		if (node.left) dfsLeft(node.left);
		else if (node.right) left.push(null);
		left.push(node.val);
		if (node.right) dfsLeft(node.right);
		else if (node.left) left.push(null);
	};
	const dfsRight = (node) => {
		if (!node) return node;
		if (node.right) dfsRight(node.right);
		else if (node.left) right.push(null);
		right.push(node.val);
		if (node.left) dfsRight(node.left);
		else if (node.right) right.push(null);
	};
	dfsLeft(root);
	dfsRight(root);
	if (left.length !== right.length) return false;
	for (let i = 0; i < left.length; i++) {
		if (left[i] !== right[i]) return false;
	}
	return true;
};

export const isSymmetric = (root) => {
	const rec = (left, right) => {
		if (!left && !right) return true;
		if (!left || !right) return false;
		return left.val === right.val && rec(left.left, right.right) && rec(left.right, right.left);
	};
	return rec(root, root);
};

export const isSymmetric = (root) => {
	if (!root) return true;
	const queue = [root, root];
	while (queue.length) {
		const nodeLeft = queue.shift();
		const nodeRight = queue.shift();
		if (!nodeLeft && !nodeRight) continue;
		if (!nodeLeft || !nodeRight || nodeLeft.val !== nodeRight.val) return false;
		queue.push(...[nodeLeft.left, nodeRight.right, nodeLeft.right, nodeRight.left]);
	}
	return true;
};

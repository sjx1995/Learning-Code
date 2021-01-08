/*
 * @Author: Sunly
 * @Date: 2021-01-07 15:12:32
 * @LastEditTime: 2021-01-07 16:07:31
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\513\main.js
 */
// 广度优先
export const findBottomLeftValue = (root) => {
	if (!root) return root;
	let res = 0;
	const queue = [root];
	while (queue.length) {
		res = queue[0].val;
		const leng = queue.length;
		for (let i = 0; i < leng; i++) {
			const curNode = queue.shift();
			if (curNode.left) queue.push(curNode.left);
			if (curNode.right) queue.push(curNode.right);
		}
	}
	return res;
};

// 广度优先
export const findBottomLeftValue = (root) => {
	let res = [0, root.val];
	let dep = 0;
	const rec = (root, dep) => {
		if (root.left) rec(root.left, dep + 1);
		if (dep > res[0]) res = [dep, root.val];
		if (root.right) rec(root.right, dep + 1);
	};
	rec(root, dep);
	return res[1];
};

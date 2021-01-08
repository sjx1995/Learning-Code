/*
 * @Author: Sunly
 * @Date: 2021-01-07 17:24:14
 * @LastEditTime: 2021-01-07 18:05:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\1379\main.js
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var getTargetCopy = function (original, cloned, target) {
	let res = null;
	const rec = (node) => {
		if (node.val === target.val) res = node;
		if (node.left) rec(node.left);
		if (node.right) rec(node.right);
	};
	rec(cloned);
	return res;
};

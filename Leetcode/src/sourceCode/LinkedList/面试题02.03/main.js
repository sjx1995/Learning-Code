/*
 * @Author: Sunly
 * @Date: 2020-11-13 12:08:43
 * @LastEditTime: 2020-11-13 12:21:13
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.03\main.js
 */
export const deleteNode = (node) => {
	node.val = node.next.val;
	node.next = node.next.next;
};

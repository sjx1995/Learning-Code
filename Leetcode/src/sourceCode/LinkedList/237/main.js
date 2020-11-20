/*
 * @Author: Sunly
 * @Date: 2020-11-16 15:40:43
 * @LastEditTime: 2020-11-16 15:45:39
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\237\main.js
 */
export const deleteNode = (node) => {
	node.val = node.next.val;
	node.next = node.next.next;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-16 16:56:15
 * @LastEditTime: 2020-11-16 18:11:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\876\main.js
 */
export const middleNode = (head) => {
	let count = 0;
	let node = head;
	while (node) {
		count++;
		node = node.next;
	}
	count = count % 2 === 1 ? (count - 1) / 2 : count / 2;
	while (count-- > 0) {
		head = head.next;
	}
	return head;
};

export const middleNode = (head) => {
	let fast = head,
		slow = head;
	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
};

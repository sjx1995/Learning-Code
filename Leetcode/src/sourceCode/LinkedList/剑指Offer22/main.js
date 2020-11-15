/*
 * @Author: Sunly
 * @Date: 2020-11-13 12:05:33
 * @LastEditTime: 2020-11-13 12:07:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\剑指Offer22\main.js
 */
export const getKthfromEnd = (head, k) => {
	let fast = head,
		slow = head;
	for (let i = 0; i < k; i++) {
		fast = fast.next;
	}
	while (fast) {
		fast = fast.next;
		slow = slow.next;
	}
	return slow;
};

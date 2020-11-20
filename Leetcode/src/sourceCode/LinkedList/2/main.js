/*
 * @Author: Sunly
 * @Date: 2020-11-20 16:13:20
 * @LastEditTime: 2020-11-20 18:37:18
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\2\main.js
 */
export const addTwoNumbers = (l1, l2) => {
	let sumList = new ListNode();
	let listHead = sumList;
	let decimal = 0;
	while (l1 || l2) {
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + decimal;
		decimal = ~~(sum / 10);
		sumList.next = new ListNode(sum % 10);
		sumList = sumList.next;
		l1 ? (l1 = l1.next) : null;
		l2 ? (l2 = l2.next) : null;
	}
	sumList.next = decimal ? new ListNode(decimal) : null;
	return listHead.next;
};

export const addTwoNumbers = (l1, l2) => {
	let carry = 0;
	function recursion(l1, l2, carry) {
		if (!l1 && !l2 && !carry) return null;
		let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
		let node = new ListNode(sum % 10);
		node.next = recursion(l1 ? l1.next : null, l2 ? l2.next : null, ~~(sum / 10));
		return node;
	}
	return recursion(l1, l2, carry);
};

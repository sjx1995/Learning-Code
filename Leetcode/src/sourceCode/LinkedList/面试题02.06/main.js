/*
 * @Author: Sunly
 * @Date: 2020-11-18 11:13:19
 * @LastEditTime: 2020-11-18 14:24:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.06\main.js
 */
export const isPalindrome = (head) => {
	const arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	let l = 0,
		r = arr.length - 1;
	while (l < r) {
		if (arr[l] !== arr[r]) return false;
		l++;
		r--;
	}
	return true;
};

export const isPalindrome = (head) => {
	let fast = head,
		slow = head;
	listHead = head;
	while (fast && fast.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	function recursion(node) {
		if (!node || !node.next) return node;
		let head = recursion(node.next);
		node.next.next = node;
		node.next = null;
		return head;
	}
	let halfHead = recursion(slow);
	while (halfHead) {
		if (halfHead.val !== listHead.val) return false;
		halfHead = halfHead.next;
		listHead = listHead.next;
	}
	return true;
};

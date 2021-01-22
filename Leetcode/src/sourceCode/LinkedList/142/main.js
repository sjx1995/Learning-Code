/*
 * @Author: Sunly
 * @Date: 2021-01-21 16:21:44
 * @LastEditTime: 2021-01-21 17:56:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\142\main.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const detectCycle = (head) => {
	if (!head || !head.next) return false;
	let fast = head.next,
		slow = head;
	while (fast && fast.next) {
		if (fast === slow) {
		}
		fast = fast.next.next;
		slow = slow.next.next;
	}
	return false;
};

const hasCycle = (head) => {
	if (!head || !head.next) return false;
	let fast = head.next,
		slow = head;
	while (fast && fast.next) {
		if (fast === slow) return true;
		fast = fast.next.next;
		slow = slow.next;
	}
	return false;
};

const detectCycle = (head) => {
	const set = new Set();
	while (head) {
		if (set.has(head)) {
			return true;
		} else {
			set.add(head);
			head = head.next;
		}
	}
	return false;
};

const detectCycle = (head) => {
	if (!head || !head.next) return head;
	let fast = head.next,
		slow = head;
	while (fast && fast.next) {
		if (fast === slow) {
			let node = head;
			while (node !== slow) {
				node = node.next;
				slow = slow.next;
			}
			return node;
		}
		fast = fast.next.next;
		slow = slow.next;
	}
	return null;
};

var detectCycle = function (head) {
	if (head === null) {
		return null;
	}
	let slow = head,
		fast = head;
	while (fast !== null) {
		slow = slow.next;
		if (fast.next !== null) {
			fast = fast.next.next;
		} else {
			return null;
		}
		if (fast === slow) {
			let ptr = head;
			while (ptr !== slow) {
				ptr = ptr.next;
				slow = slow.next;
			}
			return ptr;
		}
	}
	return null;
};

const detectCycle = (head) => {
	while (head) {
		if (head.flag) {
			return head;
		} else {
			head.flag = true;
			head = head.next;
		}
	}
	return null;
};

const detectCycle = (head) => {
	let slow = head,
		fast = head;
	while (fast && fast.next) {
		if (fast === slow) {
			let node = head;
			while (node !== slow) {
				node = node.next;
				slow = slow.next;
			}
			return node;
		}
		fast = fast.next.next;
		slow = slow.next;
	}
	return null;
};

const detectCycle = (head) => {
	let fast = head,
		slow = head;
	while (fast) {
		slow = slow.next;
		if (fast.next) {
			fast = fast.next.next;
		} else {
			return null;
		}
		if (fast === slow) {
			let node = head;
			while (node !== slow) {
				node = node.next;
				slow = slow.next;
			}
			return slow;
		}
	}
	return null;
};

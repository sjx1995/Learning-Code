/*
 * @Author: Sunly
 * @Date: 2020-11-18 11:12:28
 * @LastEditTime: 2020-11-18 11:12:30
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\面试题02.07\main.js
 */
export const getIntersectionNode = (headA, headB) => {
	const map = new Map();
	while (headA) {
		map.set(headA);
		headA = headA.next;
	}
	while (headB) {
		if (map.has(headB)) return headB;
		headB = headB.next;
	}
	return null;
};

export const getIntersectionNode = (headA, headB) => {
	let nodeA = headA,
		nodeB = headB;
	let lengthA = 0,
		lengthB = 0;
	while (nodeA) {
		lengthA++;
		nodeA = nodeA.next;
	}
	while (nodeB) {
		lengthB++;
		nodeB = nodeB.next;
	}
	if (!lengthA || !lengthB) return null;
	let diff = Math.abs(lengthA - lengthB);
	let slow, fast;
	if (lengthA > lengthB) {
		fast = headA;
		slow = headB;
	} else {
		fast = headB;
		slow = headA;
	}
	while (diff--) {
		fast = fast.next;
	}
	while (fast && slow) {
		if (fast === slow) return fast;
		fast = fast.next;
		slow = slow.next;
	}
	return null;
};

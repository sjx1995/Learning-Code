/*
 * @Author: Sunly
 * @Date: 2020-11-17 16:20:51
 * @LastEditTime: 2020-11-17 18:08:45
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\160\main.js
 */
export const getIntersectionNode = (headA, headB) => {
	const map = new Map();
	let nodeA = headA;
	while (nodeA) {
		map.set(nodeA, true);
		nodeA = nodeA.next;
	}
	let nodeB = headB;
	while (nodeB) {
		if (map.has(nodeB)) return nodeB;
		nodeB = nodeB.next;
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
	let slow = null,
		fast = null;
	if (lengthA > lengthB) {
		slow = headB;
		fast = headA;
	} else {
		slow = headA;
		fast = headB;
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

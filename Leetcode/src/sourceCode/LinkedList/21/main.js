/*
 * @Author: Sunly
 * @Date: 2020-11-13 12:24:52
 * @LastEditTime: 2020-11-13 15:19:50
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\21\main.js
 */
export const mergeTwoLists = (l1, l2) => {
	let prevHead = new listNode(-1);
	let prevNode = prevHead;
	while (l1 && l2) {
		if (l1.val <= l2.val) {
			prevNode.next = l1;
			l1 = l1.next;
		} else {
			prevNode.next = l2;
			l2 = l2.next;
		}
	}
	if (l1) {
		prevNode.next = l1;
	} else {
		prevNode.next = l2;
	}
	return prevHead;
};

export const mergeTwoLists = (l1, l2) => {
	if (!l1) {
		return l2;
	} else if (!l2) {
		return l1;
	} else if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l2.next, l1);
		return l2;
	}
};

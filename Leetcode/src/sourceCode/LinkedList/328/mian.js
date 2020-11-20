/*
 * @Author: Sunly
 * @Date: 2020-11-13 20:14:34
 * @LastEditTime: 2020-11-19 18:04:32
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\328\mian.js
 */
export const oddEvenList = (head) => {
	if (!head) return null;
	let odd = head,
		even = head.next,
		evenHead = head.next;
	while (even && even.next) {
		odd.next = even.next;
		even.next = even.next.next;
		odd = odd.next;
		even = even.next;
	}
	odd.next = evenHead;
	return head;
};

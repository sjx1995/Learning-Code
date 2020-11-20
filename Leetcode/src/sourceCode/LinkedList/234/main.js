/*
 * @Author: Sunly
 * @Date: 2020-11-13 16:22:50
 * @LastEditTime: 2020-11-13 16:26:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\LinkedList\234\main.js
 */
export const isPalindrome = (head) => {
	const arr = [];
	while (head) {
		arr.push(head.val);
		head = head.next;
	}
	let left = 0,
		right = arr.length - 1;
	while (left < right) {
		if (arr[left] !== arr[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

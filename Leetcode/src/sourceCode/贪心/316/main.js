/*
 * @Author: Sunly
 * @Date: 2020-12-21 11:02:56
 * @LastEditTime: 2020-12-21 11:29:00
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\316\main.js
 */
export const removeDuplicateLetters = (s) => {
	const letters = new Array(26).fill(0);
	const canPush = new Array(26).fill(true);
	const stack = [];
	Array.prototype.forEach.call(s, (t) => letters[t.charCodeAt() - 97]++);
	Array.prototype.forEach.call(s, (t) => {
		if (canPush[t.charCodeAt() - 97]) {
			while (stack.length && stack[stack.length - 1] > t) {
				if (letters[stack[stack.length - 1].charCodeAt() - 97]) {
					canPush[stack[stack.length - 1].charCodeAt() - 97] = true;
					stack.pop();
				} else {
					break;
				}
			}
			stack.push(t);
			canPush[t.charCodeAt() - 97] = false;
		}
		letters[t.charCodeAt() - 97]--;
	});
	return stack.join("");
};

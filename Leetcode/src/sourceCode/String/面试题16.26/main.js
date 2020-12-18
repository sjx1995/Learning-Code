/*
 * @Author: Sunly
 * @Date: 2020-12-14 15:10:21
 * @LastEditTime: 2020-12-14 17:35:12
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\面试题16.26\main.js
 */
export const calculate = (s) => {
	let cur = "",
		dig = "+";
	const stack = [];
	for (let i = 0; i < s.length + 1; i++) {
		if (s[i] >= "0" && s[i] <= 9) {
			cur += s[i];
		} else {
			cur = Number(cur);
			if (dig === "+") stack.push(cur) && (dig = s[i]);
			else if (dig === "-") stack.push(-cur) && (dig = s[i]);
			else if (dig === "*") stack.push(stack.pop() * cur) && (dig = s[i]);
			else if (dig === "/") stack.push(~~(stack.pop() / cur)) && (dig = s[i]);
			cur = "";
		}
	}
	return stack.reduce((acc, cur) => (acc += cur));
};

export const calculate = (s) => {
	let dig = "+",
		cur = "";
	const stack = [];
	for (let i = 0; i <= s.length; i++) {
		if (s[i] === " ") continue;
		if (s[i] <= "9" && s[i] >= "0") {
			cur += s[i];
			continue;
		}
		if (dig === "+") stack.push(Number(cur));
		else if (dig === "-") stack.push(-Number(cur));
		else if (dig === "*") stack.push(stack.pop() * Number(cur));
		else if (dig === "/") stack.push(~~(stack.pop() / Number(cur)));
		cur = "";
		dig = s[i];
	}
	return stack.reduce((acc, cur) => (acc += cur));
};

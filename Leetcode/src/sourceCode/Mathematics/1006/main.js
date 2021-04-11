/*
 * @Author: Sunly
 * @Date: 2021-04-01 10:33:10
 * @LastEditTime: 2021-04-01 14:39:16
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\1006\main.js
 */
const clumsy = N => {
	const stack = [N--];
	for (let i = N, j = 0; i > 0; i--, j++) {
		if (j % 4 === 0) {
			// 乘
			stack.push(stack.pop() * i);
		} else if (j % 4 === 1) {
			//除
			const cur = stack.pop();
			stack.push(cur >= 0 ? Math.floor(cur / i) : Math.ceil(cur / i));
		} else if (j % 4 === 2) {
			// 加
			stack.push(i);
		} else if (j % 4 === 3) {
			// 减
			stack.push(-i);
		}
	}
	return stack.reduce((acc, cur) => (acc += cur));
};

const clumsy = N => {
	if (N === 1) return 1;
	if (N === 2) return 2;
	if (N === 3) return 6;
	if (N === 4) return 7;
	if (N % 4 === 0) return N + 1;
	if (N % 4 <= 2) return N + 2;
	if (N % 4 === 3) return N - 1;
};

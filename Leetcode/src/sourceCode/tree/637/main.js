/*
 * @Author: Sunly
 * @Date: 2020-12-23 14:38:15
 * @LastEditTime: 2020-12-23 15:02:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\tree\637\main.js
 */
export const averageOfLevels = (root) => {
	if (!root) return [];
	const average = [];
	const queue = [root];
	while (queue.length) {
		const nextRow = [];
		let rowVal = 0,
			rowCount = 0;
		while (queue.length) {
			const node = queue.shift();
			rowVal += node.val;
			rowCount++;
			if (node.left) nextRow.push(node.left);
			if (node.right) nextRow.push(node.right);
		}
		average.push(rowVal / rowCount);
		queue.push(...nextRow);
	}
	return average;
};

/*
 * @Author: Sunly
 * @Date: 2020-11-11 11:53:43
 * @LastEditTime: 2020-11-11 12:15:30
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\514\main.js
 */
export const findRotateSteps = (ring, key) => {
	let steps = 0;
	ring = ring.split("");
	for (let keyIndex = 0; keyIndex < key.length; keyIndex++) {
		let start = 0,
			end = ring.length - 1;
		while (ring[start] !== key[keyIndex] && ring[end] !== key[keyIndex]) {
			start++;
			end--;
		}
		if (ring[start] === key[keyIndex]) {
			steps += start + 1;
			ring.splice(ring.length, 0, ...ring.splice(0, start));
		} else {
			steps += start + 2;
			ring.splice(ring.length, 0, ...ring.splice(0, end));
		}
	}
	return steps;
};

/*
 * @Author: Sunly
 * @Date: 2021-02-05 11:31:08
 * @LastEditTime: 2021-02-05 12:24:06
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1208\main.js
 */
export const equalSubstring = (s, t, maxCost) => {
	let i = 0,
		j = 0;
	const cost = [];
	while (i < s.length && j < t.length) {
		cost[i] = Math.abs(s[i].charCodeAt() - t[j].charCodeAt());
		i++;
		j++;
	}
	let res = 0;
	for (let m = 0; m < cost.length; m++) {
		let max = 0;
		let residue = maxCost;
		for (let n = m; n < cost.length; n++) {
			if (cost[n] <= residue) {
				max++;
				residue -= cost[n];
			} else {
				break;
			}
		}
		res = Math.max(res, max);
	}
	return res;
};

export const equalSubstring = (s, t, maxCost) => {
	let left = 0,
		right = 0;
	let curCost = 0;
	while (right < s.length && right < t.length) {
		const cost = Math.abs(s[right].charCodeAt() - t[right].charCodeAt());
		if (cost + curCost > maxCost) {
			curCost -= Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
			left++;
		}
		curCost += cost;
		right++;
	}
	return right - left;
};

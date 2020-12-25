/*
 * @Author: Sunly
 * @Date: 2020-12-24 10:46:00
 * @LastEditTime: 2020-12-24 15:50:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\135\main.js
 */
export const candy = (ratings) => {
	let count = 0;
	const left = [],
		right = [];
	for (let i = 0; i < ratings.length; i++) {
		if (i > 0 && ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
		else left[i] = 1;
	}
	for (let i = ratings.length - 1; i >= 0; i--) {
		if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
		else right[i] = 1;
		count += Math.max(left[i], right[i]);
	}
	return count;
};

export const candy = (ratings) => {
	let count = 1,
		up = 1,
		down = 0;
	for (let i = 1; i < ratings.length; i++) {
		if (ratings[i] > ratings[i - 1]) {
			if (down !== 0) up = 1;
			down = 0;
			up++;
			count += up;
		} else if (ratings[i] === ratings[i - 1]) {
			down = 0;
			up = 1;
			count++;
		} else {
			down++;
			if (down === up) down++;
			count += down;
		}
	}
	return count;
};

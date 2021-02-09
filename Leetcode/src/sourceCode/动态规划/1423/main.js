/*
 * @Author: Sunly
 * @Date: 2021-02-08 11:18:07
 * @LastEditTime: 2021-02-09 17:33:04
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\动态规划\1423\main.js
 */
export const maxScore_1 = (cardPoints, k) => {
	const fromLeft = [0];
	const fromRight = [0];
	for (let i = 0; i < k; i++) {
		fromLeft.push(cardPoints[i] + fromLeft[i]);
		fromRight.push(cardPoints[cardPoints.length - 1 - i] + fromRight[i]);
	}
	let maxPoints = -Infinity;
	let j = k;
	while (j >= 0) {
		const curPoints = fromLeft[j] + fromRight[k - j];
		j--;
		maxPoints = Math.max(maxPoints, curPoints);
	}
	return maxPoints;
};

export const maxScore = (cardPoints, k) => {
	let sum = 0;
	let windowSum = 0;
	for (let i = 0, j = 0; i < cardPoints.length; i++, j++) {
		sum += cardPoints[i];
		if (j < cardPoints.length - k) windowSum += cardPoints[i];
	}
	let max = sum - windowSum;
	for (let i = 0; i < k; i++) {
		windowSum -= cardPoints[i];
		windowSum += cardPoints[cardPoints.length - k + i];
		max = Math.max(max, sum - windowSum);
	}
	return max;
};

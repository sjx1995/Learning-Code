/*
 * @Author: Sunly
 * @Date: 2020-12-03 18:59:56
 * @LastEditTime: 2020-12-03 19:19:17
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\167\main.js
 */
export const twoSum = (numbers, target) => {
	let l = 0,
		r = numbers.length - 1;
	while (l < r) {
		if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
		if (numbers[l] + numbers[r] > target) r--;
		else if (numbers[l] + numbers[r] < target) l++;
	}
	return [-1, -1];
};

export const twoSum = (numbers, target) => {
	for (let i = 0; i < numbers.length; i++) {
		let start = i + 1,
			end = numbers.length - 1;
		while (start <= end) {
			const mid = ~~((start + end) / 2);
			if (target - numbers[i] === numbers[mid]) return [i + 1, mid + 1];
			if (target - numbers[i] > numbers[mid]) start = mid + 1;
			else if (target - numbers[i] < numbers[mid]) end = mid - 1;
		}
	}
	return [-1, -1];
};

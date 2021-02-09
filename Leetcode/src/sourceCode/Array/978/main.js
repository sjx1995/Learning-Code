/*
 * @Author: Sunly
 * @Date: 2021-02-08 11:42:25
 * @LastEditTime: 2021-02-09 15:58:09
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\978\main.js
 */
export const maxTurbulenceSize_1 = (arr) => {
	let left = 0,
		right = 0;
	let nextDirection = null;
	let maxLength = 1;
	let curLength = 1;
	while (right < arr.length - 1) {
		if (arr[right + 1] > arr[right] && (!nextDirection || nextDirection === "up")) {
			nextDirection = "down";
			right++;
			curLength++;
		} else if (arr[right + 1] < arr[right] && (!nextDirection || nextDirection === "down")) {
			nextDirection = "up";
			right++;
			curLength++;
		} else if (arr[right + 1] === arr[right]) {
			nextDirection = null;
			right++;
			left = right;
			maxLength = Math.max(maxLength, curLength);
			curLength = 1;
		} else {
			nextDirection = null;
			left = right;
			maxLength = Math.max(maxLength, curLength);
			curLength = 1;
		}
	}
	return maxLength > curLength ? maxLength : curLength;
};

export const maxTurbulenceSize_2 = (arr) => {
	let left = 0,
		right = 0;
	let max = 1;
	while (right < arr.length - 1) {
		if (left === right) {
			if (arr[left] === arr[left + 1]) {
				left++;
			}
			right++;
		} else {
			if (
				(arr[right - 1] > arr[right] && arr[right] < arr[right + 1]) ||
				(arr[right - 1] < arr[right] && arr[right] > arr[right + 1])
			) {
				right++;
			} else {
				left = right;
			}
		}
		max = Math.max(max, right - left + 1);
	}
	return max;
};

export const maxTurbulenceSize = (arr) => {
	const dpArr = [[1, 1]];
	let max = 1;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] < arr[i]) {
			dpArr.push([dpArr[dpArr.length - 1][1] + 1, 1]);
		} else if (arr[i - 1] > arr[i]) {
			dpArr.push([1, dpArr[dpArr.length - 1][0] + 1]);
		} else {
			dpArr.push([1, 1]);
		}
		max = Math.max(max, dpArr[dpArr.length - 1][0], dpArr[dpArr.length - 1][1]);
	}
	return max;
};

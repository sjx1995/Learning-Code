/*
 * @Author: Sunly
 * @Date: 2020-12-04 14:21:00
 * @LastEditTime: 2020-12-04 16:40:25
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\209\main.js
 */
export const minSubArrayLen_1 = (s, nums) => {
	let slow = 0,
		fast = 0;
	let minLen = +Infinity;
	let sum = nums[0];
	while (slow < nums.length) {
		if (sum < s) {
			if (fast < nums.length - 1) sum += nums[++fast];
			else sum -= nums[slow++];
		} else {
			minLen = Math.min(minLen, fast - slow + 1);
			sum -= nums[slow++];
		}
	}
	return minLen === Infinity ? 0 : minLen;
};

// export const minSubArrayLen = (s, nums) => {
// 	const sums = [];
// 	nums.reduce((acc, cur, idx) => {
// 		acc += cur;
// 		sums[idx] = acc;
// 		return acc;
// 	}, 0);
// 	console.log(sums);
// 	let minLen = +Infinity;
// 	for (let i = 0; i < nums.length; i++) {
// 		let start = 0,
// 			end = sums.length;
// 		while (start <= end) {
// 			const mid = ~~((start + end) / 2);
// 			console.log(sums[i], mid > 0 ? sums[mid - 1] : 0, mid);
// 			if (sums[i] - (mid > 0 ? sums[mid - 1] : 0) < s) {
// 				end = mid - 1;
// 			} else {
// 				minLen = Math.min(minLen, i - start + 1);
// 				start = mid + 1;
// 			}
// 		}
// 	}
// 	return minLen === Infinity ? 0 : minLen;
// };

export const minSubArrayLen = (s, nums) => {
	const sums = [0];
	nums.reduce((acc, cur) => {
		acc += cur;
		sums.push(acc);
		return acc;
	}, 0);
	let minLen = +Infinity;
	for (let i = 1; i < sums.length; i++) {
		let start = 0,
			end = sums.length - 1;
		while (start <= end) {
			const mid = ~~((start + end) / 2);
			if (sums[i] - sums[mid] < s) {
				end = mid - 1;
			} else {
				minLen = Math.min(minLen, i - mid);
				start = mid + 1;
			}
		}
	}
	return minLen === Infinity ? 0 : minLen;
};

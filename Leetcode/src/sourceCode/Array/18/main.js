/*
 * @Author: Sunly
 * @Date: 2020-10-13 09:43:47
 * @LastEditTime: 2020-10-13 10:25:42
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Array\18\main.js
 */
export const fourSum = (nums, target) => {
	nums.sort((a, b) => a - b);
	let res = [];
	for (let i = 0; i < nums.length - 3; i++) {
		for (let j = i + 1; j < nums.length - 2; j++) {
			let l = j + 1,
				r = nums.length - 1;
			while (l < r) {
				if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
					res.push([nums[i], nums[j], nums[l], nums[r]]);
				}
				if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
					r--;
					while (nums[r] === nums[r + 1] && l < r) r--;
				} else {
					l++;
					while (nums[l] === nums[l - 1] && l < r) l++;
				}
			}
			while (nums[j] === nums[j + 1] && j < nums.length - 2) j++;
		}
		while (nums[i] === nums[i + 1] && i < nums.length - 3) i++;
	}
	return res;
};

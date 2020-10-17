/*
 * @Author: Sunly
 * @Date: 2020-10-09 12:28:57
 * @LastEditTime: 2020-10-10 10:42:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\15\main.js
 */
export const threeSum = (nums) => {
	nums.sort((a, b) => a - b);
	let i = 0;
	let res = [];
	while (nums[i] <= 0 && i < nums.length) {
		let l = i + 1;
		let r = nums.length - 1;
		while (l < r) {
			if (nums[i] + nums[l] + nums[r] === 0) {
				res.push([nums[i], nums[l], nums[r]]);
				while (nums[l + 1] === nums[l] && l < r) l++;
				while (nums[r - 1] === nums[r] && l < r) r--;
				l++;
				r--;
			} else if (nums[i] + nums[l] + nums[r] > 0) {
				r--;
			} else {
				l++;
			}
		}
		do {
			i++;
		} while (nums[i] === nums[i - 1]);
	}
	return res;
};

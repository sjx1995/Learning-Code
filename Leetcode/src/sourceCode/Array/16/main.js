/*
 * @Author: Sunly
 * @Date: 2020-10-12 18:10:29
 * @LastEditTime: 2020-10-12 18:37:51
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\16\main.js
 */
export const threeSumClosest = (nums, target) => {
	nums.sort((a, b) => a - b);
	let res = -Infinity;
	for (let i = 0; i < nums.length - 2; i++) {
		let l = i + 1,
			r = nums.length - 1;
		while (l < r) {
			let sum = nums[i] + nums[l] + nums[r];
			if (Math.abs(target - res) > Math.abs(target - sum)) {
				res = sum;
			}
			if (sum > target) {
				r--;
			} else {
				l++;
			}
		}
	}
	return res;
};

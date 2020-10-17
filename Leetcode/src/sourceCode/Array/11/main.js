/*
 * @Author: Sunly
 * @Date: 2020-10-12 17:41:53
 * @LastEditTime: 2020-10-12 17:55:02
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\11\main.js
 */
export const maxArea_1 = (height) => {
	let max = 0;
	for (let i = 0; i < height.length - 1; i++) {
		for (let j = i + 1; j < height.length; j++) {
			if (max < (j - i) * Math.min(height[j], height[i])) {
				max = (j - i) * Math.min(height[j], height[i]);
			}
		}
	}
	return max;
};

export const maxArea = (height) => {
	let l = 0,
		r = height.length - 1;
	let max = 0;
	while (l < r) {
		if (max < Math.min(height[l], height[r]) * (r - l)) {
			max = Math.min(height[l], height[r]) * (r - l);
		}
		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		}
	}
	return max;
};

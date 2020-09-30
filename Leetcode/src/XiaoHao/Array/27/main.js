/*
 * @Author: Sunly
 * @Date: 2020-09-30 15:30:44
 * @LastEditTime: 2020-09-30 16:33:49
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \leetcode\src\XiaoHao\Array\27\main.js
 */
export const removeElement_1 = (nums, val) => {
	let length = nums.length;
	let i = 0,
		j = nums.length - 1;
	for (; i < length; i++) {
		if (nums[i] === val) {
			let temp = nums[i];
			nums[i] = nums[j];
			temp = nums[j];
			i--;
			j--;
			length--;
		}
	}
	return length;
};

export const removeElement_2 = (nums, val) => {
	let i = 0,
		j = nums.length - 1;
	while (i <= j) {
		if (nums[i] === val) {
			nums[i] = nums[j];
			j--;
		} else {
			i++;
		}
	}
	return i;
};

export const removeElement = (nums, val) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

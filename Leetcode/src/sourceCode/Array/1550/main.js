/*
 * @Author: Sunly
 * @Date: 2020-10-12 12:07:40
 * @LastEditTime: 2020-10-12 12:26:00
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1550\main.js
 */
export const threeConsecutiveOdds_1 = (arr) => {
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
			return true;
		} else if (arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 1) {
			i++;
			continue;
		} else if (arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
			i += 2;
			continue;
		}
	}
	return false;
};

export const threeConsecutiveOdds = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] & 1 && arr[i + 1] & 1 && arr[i + 2] & 1) {
			return true;
		}
	}
	return false;
};

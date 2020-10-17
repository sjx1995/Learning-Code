/*
 * @Author: Sunly
 * @Date: 2020-10-12 16:10:22
 * @LastEditTime: 2020-10-12 16:46:35
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\605\main.js
 */

export const canPlaceFlowers_1 = (flowerbed, n) => {
	let flowerbeds = [0, ...flowerbed, 0];
	for (let i = 0; i < flowerbeds.length - 2; i++) {
		if (!flowerbeds[i] && !flowerbeds[i + 1] && !flowerbeds[i + 2]) {
			n--;
			i++;
		}
		if (n <= 0) {
			return true;
		}
	}
	return false;
};

export const canPlaceFlowers = (flowerbed, n) => {
	for (let i = 0; i < flowerbed.length; i++) {
		if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
			n--;
			i++;
		}
		console.log(n);
		if (n <= 0) {
			return true;
		}
	}
	return false;
};

/*
 * @Author: Sunly
 * @Date: 2021-04-11 10:52:38
 * @LastEditTime: 2021-04-12 12:17:59
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\排序\179\main.js
 */
const largestNumber = nums => {
	return nums.sort((a, b) => b - a).join("");
};

const largestNumber = nums => {
	nums.sort((a, b) => {
		let ab = "" + a + b;
		let ba = "" + b + a;
		if (ab > ba) return -1;
		else if (ab < ba) return 1;
		else return 0;
	});
	if (nums[0] === 0) return "0";
	return nums.join("");
};

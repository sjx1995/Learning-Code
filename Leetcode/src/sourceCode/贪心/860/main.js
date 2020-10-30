/*
 * @Author: Sunly
 * @Date: 2020-10-30 18:22:22
 * @LastEditTime: 2020-10-30 18:41:55
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\860\main.js
 */
export const lemonadeChange = (bills) => {
	// pocket为卖家五元和十元的数量
	let pocket = [0, 0];
	for (const bill of bills) {
		if (bill === 5) {
			pocket[0]++;
		}
		if (bill === 10) {
			pocket[0]--;
			pocket[1]++;
		}
		if (bill === 20) {
			if (pocket[1] > 0) {
				pocket[0]--;
				pocket[1]--;
			} else {
				pocket[0] -= 3;
			}
		}
		if (pocket[0] < 0 || pocket[1] < 0) {
			return false;
		}
	}
	return true;
};

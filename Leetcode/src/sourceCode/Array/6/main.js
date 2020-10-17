/*
 * @Author: Sunly
 * @Date: 2020-10-10 10:58:29
 * @LastEditTime: 2020-10-10 11:26:53
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\6\main.js
 */
export const convert = (s, numRows) => {
	let temp = [];
	let strArr = s.split("");
	let i = 0,
		j = 0;
	let resStr = "";
	for (let k = 0; k < strArr.length; k++) {
		if (!temp[i]) temp[i] = [];
		temp[i][j] = strArr[k];
		if (i === 0 || i % (numRows - 1) === 0) {
			if (j === numRows - 1) {
				i++;
				j >= 1 ? j-- : null;
			} else {
				j++;
			}
		} else {
			i++;
			j >= 1 ? j-- : null;
		}
	}
	for (let y = 0; y < temp[0].length; y++) {
		for (let x = 0; x < temp.length; x++) {
			if (temp[x][y]) resStr += temp[x][y];
		}
	}
	return resStr;
};

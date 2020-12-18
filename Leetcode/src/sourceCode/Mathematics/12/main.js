/*
 * @Author: Sunly
 * @Date: 2020-12-17 16:13:39
 * @LastEditTime: 2020-12-17 17:31:41
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\12\main.js
 */

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。

export const intToRoman = (num) => {
	let maxDig = num.toString().length;
	let roman = "";
	for (; maxDig > 0; maxDig--) {
		let curCount = ~~((num % 10 ** maxDig) / 10 ** (maxDig - 1));
		if (maxDig === 4) {
			roman += "M".repeat(curCount);
		} else {
			if (curCount === 9) {
				if (maxDig === 3) roman += "CM";
				else if (maxDig === 2) roman += "XC";
				else if (maxDig === 1) roman += "IX";
			} else if (curCount === 4) {
				if (maxDig === 3) roman += "CD";
				else if (maxDig === 2) roman += "XL";
				else if (maxDig === 1) roman += "IV";
			} else if (curCount < 4) {
				if (maxDig === 3) roman += "C".repeat(curCount);
				else if (maxDig === 2) roman += "X".repeat(curCount);
				else if (maxDig === 1) roman += "I".repeat(curCount);
			} else {
				if (maxDig === 3) roman += "D" + "C".repeat(curCount - 5);
				else if (maxDig === 2) roman += "L" + "X".repeat(curCount - 5);
				else if (maxDig === 1) roman += "V" + "I".repeat(curCount - 5);
			}
		}
	}
	return roman;
};

export const intToRoman = (num) => {
	const thousands = ["", "M", "MM", "MMM"];
	const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	return thousands[~~(num / 1000)] + hundreds[~~((num % 1000) / 100)] + tens[~~((num % 100) / 10)] + ones[~~(num % 10)];
};

export const intToRoman = (num) => {
	const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	let roman = "";
	for (let i = 0; i < numbers.length && num >= 0; i++) {
		while (numbers[i] <= num) {
			num -= numbers[i];
			roman += symbols[i];
		}
	}
	return roman;
};

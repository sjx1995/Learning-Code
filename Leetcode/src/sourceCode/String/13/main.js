/*
 * @Author: Sunly
 * @Date: 2020-11-03 11:34:38
 * @LastEditTime: 2020-11-03 12:03:01
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\13\main.js
 */
export const romanToInt_1 = (s) => {
	let total = 0;
	for (let i = 0; i < s.length; i++) {
		switch (s[i]) {
			case "I":
				if (s[i + 1] === "V") {
					total += 4;
					i++;
				} else if (s[i + 1] === "X") {
					total += 9;
					i++;
				} else {
					total += 1;
				}
				break;
			case "V":
				total += 5;
				break;
			case "X":
				if (s[i + 1] === "L") {
					total += 40;
					i++;
				} else if (s[i + 1] === "C") {
					total += 90;
					i++;
				} else {
					total += 10;
				}
				break;
			case "L":
				total += 50;
				break;
			case "C":
				if (s[i + 1] === "D") {
					total += 400;
					i++;
				} else if (s[i + 1] === "M") {
					total += 900;
					i++;
				} else {
					total += 100;
				}
				break;
			case "D":
				total += 500;
				break;
			case "M":
				total += 1000;
				break;
			default:
				break;
		}
	}
	return total;
};

export const romanToInt = (s) => {
	let total = 0;
	const map = new Map();
	map.set("I", 1);
	map.set("V", 5);
	map.set("X", 10);
	map.set("L", 50);
	map.set("C", 100);
	map.set("D", 500);
	map.set("M", 1000);
	map.set("IV", 4);
	map.set("IX", 9);
	map.set("XL", 40);
	map.set("XC", 90);
	map.set("CD", 400);
	map.set("CM", 900);
	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 1 && map.has(s.substring(i, i + 2))) {
			total += map.get(s.substring(i, i + 2));
			i++;
		} else {
			total += map.get(s.substring(i, i + 1));
		}
	}
	return total;
};

/*
 * @Author: Sunly
 * @Date: 2020-10-10 15:55:02
 * @LastEditTime: 2020-10-10 16:26:43
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\XiaoHao\Array\1185\main.js
 */

export const dayOfTheWeek_1 = (day, month, year) => {
	const weeks = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
	let days = 0;
	for (let i = 1971; i < year; i++) {
		if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
			days += 366;
		} else {
			days += 365;
		}
	}
	for (let i = 1; i < month; i++) {
		if (i === 2) {
			if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
				days += 29;
			} else {
				days += 28;
			}
		} else if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
			days += 31;
		} else {
			days += 30;
		}
	}
	days += day - 1;
	return weeks[days % 7];
};

export const dayOfTheWeek = (day, month, year) => {
	const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
	if (month === 1 || month === 2) {
		month += 12;
		year--;
	}
	const W =
		(day +
			2 * month +
			Math.floor((3 * (month + 1)) / 5) +
			year +
			Math.floor(year / 4) -
			Math.floor(year / 100) +
			Math.floor(year / 400)) %
		7;
	return weeks[W];
};

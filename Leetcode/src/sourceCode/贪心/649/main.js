/*
 * @Author: Sunly
 * @Date: 2020-12-11 11:11:39
 * @LastEditTime: 2020-12-11 16:04:26
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\649\main.js
 */
export const predictPartyVictory_1 = (senate) => {
	const senArr = senate.split("");
	while (true) {
		for (let i = 0; i < senArr.length; i++) {
			let j = i + 1,
				k = i - 1;
			while (j < senArr.length && senArr[j] === senArr[i]) j++;
			if (j < senArr.length) {
				senArr.splice(j, 1);
			} else {
				while (k >= 0 && senArr[k] === senArr[i]) k--;
				if (k >= 0) {
					senArr.splice(k, 1);
					i--;
				} else {
					return senArr[i] === "D" ? "Dire" : "Radiant";
				}
			}
		}
	}
};

export const predictPartyVictory_2 = (senate) => {
	const n = senate.length;
	const dire = [],
		radiant = [];
	for (const [idx, val] of Array.from(senate).entries()) {
		val === "R" ? radiant.push(idx) : dire.push(idx);
	}
	while (dire.length && radiant.length) {
		dire[0] < radiant[0] ? dire.push(dire[0] + n) : radiant.push(radiant[0] + n);
		dire.shift();
		radiant.shift();
	}
	return dire.length ? "Dire" : "Radiant";
};

export const predictPartyVictory = (senate) => {
	let totalBanDire = 0,
		totalBanRadiant = 0;
	let curBanDire = 0,
		curBanRadiant = 0;
	let direCount = 0,
		radiantCount = 0;
	let isFirst = true;
	const senArr = Array.from(senate);
	while (true) {
		for (let i = 0; i < senArr.length; i++) {
			if (senArr[i] === "R") {
				if (isFirst) radiantCount++;
				if (curBanRadiant) {
					senArr[i] = "B";
					curBanRadiant--;
				} else {
					curBanDire++;
					totalBanDire++;
					if (totalBanDire >= direCount && !isFirst) return "Radiant";
				}
			} else if (senArr[i] === "D") {
				if (isFirst) direCount++;
				if (curBanDire) {
					senArr[i] = "B";
					curBanDire--;
				} else {
					curBanRadiant++;
					totalBanRadiant++;
					if (totalBanRadiant >= radiantCount && !isFirst) return "Dire";
				}
			}
		}
		isFirst = false;
		if (totalBanDire >= direCount) return "Radiant";
		if (totalBanRadiant >= radiantCount) return "Dire";
	}
};

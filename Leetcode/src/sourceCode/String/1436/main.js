/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:56:59
 * @LastEditTime: 2020-12-15 16:25:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1436\main.js
 */
export const destCity = (paths) => {
	const citys = [];
	for (let i = 0; i < paths.length; i++) {
		citys.push(paths[i][1]);
	}
	for (let i = 0; i < paths.length; i++) {
		if (citys.indexOf(paths[i][0]) >= 0) {
			citys.splice(citys.indexOf(paths[i][0]), 1);
		}
	}
	return citys[0];
};

export const destCity = (paths) => {
	const map = new Map();
	for (let i = 0; i < paths.length; i++) {
		map.set(paths[i][0], paths[i][1]);
	}
	let end = paths[0][1];
	while (map.get(end)) {
		end = map.get(end);
	}
	return end;
};

export const destCity = (paths) => {
	const start = new Set();
	const end = new Set();
	for (let i = 0; i < paths.length; i++) {
		start.add(paths[i][0]);
		end.add(paths[i][1]);
	}
	for (const startCity of start) {
		end.delete(startCity);
	}
	return end.values().next().value;
};

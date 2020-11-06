/*
 * @Author: Sunly
 * @Date: 2020-11-02 19:09:32
 * @LastEditTime: 2020-11-02 19:46:07
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\134\main.js
 */
export const canCompleteCircuit_1 = (gas, cost) => {
	let res = 0;
	for (let i = 0; i < gas.length; i++) {
		let carGas = 0;
		for (let j = 0; j < gas.length; j++) {
			carGas += gas[j];
			carGas -= cost[j];
			if (carGas < 0) {
				break;
			}
			if (j === gas.length - 1) {
				return res;
			}
		}
		gas.push(gas.shift());
		cost.push(cost.shift());
		res++;
	}
	return -1;
};

export const canCompleteCircuit = (gas, cost) => {
	let startStation = 0,
		totalGas = 0,
		currentGas = 0;
	for (let i = 0; i < gas.length; i++) {
		totalGas = totalGas + gas[i] - cost[i];
		currentGas = currentGas + gas[i] - cost[i];
		if (currentGas < 0) {
			startStation = i + 1;
			currentGas = 0;
		}
	}
	return totalGas >= 0 ? startStation : -1;
};

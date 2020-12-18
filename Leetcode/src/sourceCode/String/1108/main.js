/*
 * @Author: Sunly
 * @Date: 2020-12-15 15:48:58
 * @LastEditTime: 2020-12-15 15:50:27
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\String\1108\main.js
 */
export const defangIPaddr = (address) => {
	return address.replaceAll(/./g, "[.]");
};

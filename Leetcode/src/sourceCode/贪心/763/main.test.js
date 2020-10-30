/*
 * @Author: Sunly
 * @Date: 2020-10-28 18:27:09
 * @LastEditTime: 2020-10-28 18:28:23
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\贪心\763\main.test.js
 */
import { partitionLabels } from "./main";

test("partition labels 1", () => {
	expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
});

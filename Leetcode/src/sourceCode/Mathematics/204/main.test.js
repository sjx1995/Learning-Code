/*
 * @Author: Sunly
 * @Date: 2020-12-03 11:52:14
 * @LastEditTime: 2020-12-03 12:10:52
 * @LastEditors: Sunly
 * @Description:
 * @FilePath: \Leetcode\src\sourceCode\Mathematics\204\main.test.js
 */
import { countPrimes } from "./main";

test("count primes 1", () => {
	expect(countPrimes(999983)).toBe(78497);
});

test("count primes 2", () => {
	expect(countPrimes(10)).toBe(4);
});

test("count primes 3", () => {
	expect(countPrimes(4)).toBe(2);
});

test("count primes 4", () => {
	expect(countPrimes(3)).toBe(1);
});

test("count primes 5", () => {
	expect(countPrimes(2)).toBe(0);
});

test("count primes 6", () => {
	expect(countPrimes(0)).toBe(0);
});

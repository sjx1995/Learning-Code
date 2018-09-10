//Problem Description
//Hey, welcome to HDOJ(Hangzhou Dianzi University Online Judge).
//In this problem, your task is to calculate SUM(n) = 1 + 2 + 3 + ... + n.
//Input
//        The input will consist of a series of integers n, one integer per line.

//Output
//        For each case, output SUM(n) in one line, followed by a blank line. You may assume the result will be in the range of 32-bit signed integer.
#include <stdio.h>
int main(void) {
    int a;
    int b;
    while (scanf("%d", &a) != EOF) {
        b = 0;
        for (int i = 1; i <= a; i++) {
            b += i;
        }
        printf("%d\n\n", b);
    }
    return 0;
}
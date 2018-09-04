//读取整数，分别显示奇数和偶数的个数及其平均值
#include <stdio.h>
int main(void) {
    int number;
    int odd = 0;
    int odd_number = 0;
    int even = 0;
    int even_number = 0;

    printf("Enter number(0 to quit):");
    while (scanf("%d", &number) == 1) {
        if (number == 0) {
            break;
        } else if (number % 2 == 0) {
            even_number++;
            even += number;
        } else if (number % 2 == 1) {
            odd_number++;
            odd += number;
        }
    }
    printf("Number of even number:%d, average of even number:%f\n", even_number, (float)even/even_number);
    printf("Number of odd number:%d, average of odd number:%f\n", odd_number, (float)odd/odd_number);
    return 0;
}
//使用带返回值的函数计算一个数m的n次幂
#include <stdio.h>
//声明power()函数原型，关键字double说明函数返回值类型，圆括号中说明参数及类型
double power(double m, int n);
//mian()是一个驱动程序
int main(void){
    int x, num2;
    float num1;
    double funRestlt;
    printf("Enter a number and the positive integer power to which the number will be raised.\n");
    printf("Enter q to quit.\n");
    x = scanf("%f %d", &num1, &num2);
    while (x == 2) {
        //函数调用，将函数返回值赋给funResult
        funRestlt = power(num1,num2);
        printf("%.3g to the power %d is %.5g\n", num1, num2, funRestlt);
        printf("Enter next pair of numbers or q to quit.\n");
        x = scanf("%f %d", &num1, &num2);
    }
    printf("Hope you enjoyed this power trip -- bye!");
    return 0;
}
//函数定义
double power(double m, int n){
    float result = 1;
    for (int i = 0; i < n; i++) {
        result *= m;
    }
    return result;
}
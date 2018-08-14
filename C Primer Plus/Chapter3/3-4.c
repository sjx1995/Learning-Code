#include <stdio.h>
int main(void){
    float a;
    printf("Enter a floating-point value:");
    scanf("%f",a);
    //小数点形式
    printf("fixed-point notation: %.6f",a);
    //指数形式
    printf("exponential notation: %e",a);
    //p记数法
    printf("p notation: %a",a);
    return 0;
}
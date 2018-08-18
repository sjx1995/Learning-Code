#include <stdio.h>
#include <float.h>
int main(void){
    double numDouble = 1.0/3.0;
    float numFloat = 1.0/3.0;
    //打印小数点后面6位数字
    printf("%.6f %.6f\n", numDouble, numFloat);
    //打印小数点后面12位数字
    printf("%.12f %.12f\n", numDouble, numFloat);
    //打印小数点后面16位数字
    printf("%.16f %.16f\n", numDouble, numFloat);
    printf("FLT_DIG:%d DBL_DIG:%d", FLT_DIG, DBL_DIG);
    return 0;
}
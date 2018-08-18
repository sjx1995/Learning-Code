//使用limits.h和float.h头文件中的定义的明示常量
#include <stdio.h>
#include <limits.h>     //整型限制
#include <float.h>      //浮点型限制
int main(void){
    printf("Some number limits for this system:\n");
    //int类型的最大和最小值
    printf("Biggest int: %d\n", INT_MAX);
    printf("smallest int: %d\n", INT_MIN);
    //char类型的位数
    printf("One byte = %d bits on this system.\n", CHAR_BIT);
    //double类型的最大值和最小值
    printf("Largest double: %e\n", DBL_MAX);
    printf("Smallest double: %e\n", DBL_MIN);
    //float类型的最少有效数字位数
    printf("float precision = %d digits\n", FLT_DIG);
    //1.00和比1.00大且最小的float类型值之间的差值
    printf("float epsilon = %e\n", FLT_EPSILON);
    return 0;
}
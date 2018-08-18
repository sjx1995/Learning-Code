//printf()和scanf()的'*'修饰符
#include <stdio.h>
int main(void){
    int a;
    //修饰符'*'跳过需要输入的位置
    printf("Please enter three number:");
    scanf("%*d %*d %d", &a);
    printf("Last integer was %d.\n", a);

    float b = 123456.789;
    int width = 3;
    int precision = 1;
    //修饰符'*'声明字符宽度
    printf("%*.*f", width, precision, b);
    return 0;
}
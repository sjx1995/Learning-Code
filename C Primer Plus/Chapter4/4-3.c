#include <stdio.h>
int main(void){
    float num;
    printf("Enter a number:");
    scanf("%f", &num);
    //输出21.3或2.1e+001
    printf("%2.1f %8.1e\n", num, num);
    //输出+21.290或2.129E+001
    printf("%+2.3f %10.3E", num, num);
    return 0;
}
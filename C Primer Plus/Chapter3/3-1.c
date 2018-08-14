#include <stdio.h>
//整数上溢、浮点数上溢、浮点数下溢
int main(void){
    int a = 200000000;
    printf("%d * %d = %d\n",a,a,a*a);
    float b = 1e30f;
    printf("%e %f\n",b,b*(1e40));
    b = 1e-44f;
    printf("%e %f",b,b/10);
    return 0;
}
//使用浮点数比整数更合适，整数在计算中可能会丢失精度
#include <stdio.h>
int main(void){
    float cup,pint,ounce,soupSpoon,teaSpoon;
    printf("Please enter number of cup: ",cup);
    scanf("%f",&cup);
    pint = cup / 2;
    ounce = cup * 8;
    soupSpoon = ounce * 2;
    teaSpoon = soupSpoon * 3;
    printf("%f cup equal %f pint or %f ounce or %f soup spoon or %f tea spoon.",
            cup,pint,ounce,soupSpoon,teaSpoon);
    return 0;
}
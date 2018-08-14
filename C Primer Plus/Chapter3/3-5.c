#include <stdio.h>
int main(void){
    int a;
    //溢出
    unsigned long long b;
    printf("Enter your age:");
    scanf("%d",&a);
//    printf("a=%d",a);
    b = a*3.156e7;
    printf("Your age equal %ull seconds.",b);
    return 0;
}
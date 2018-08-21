#include <stdio.h>
void tri(double n);
int main(void){
    double num;
    printf("Enter a number:");
    //双精度浮点数，%lf
    scanf("%lf", &num);
    tri(num);
    return 0;
}
void tri(double n){
    double numT;
    numT = n * n * n;
    printf("%lf^3 = %lf", n, numT);
}
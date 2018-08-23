#include <stdio.h>
double cres(double m, double n);
int main(void){
    double num1, num2, resultfun;
    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);
    resultfun = cres(num1, num2);
    printf("result: %lf", resultfun);
    return 0;
}
double cres(double m, double n){
    double result;
    result = (m - n) / (m * n);
    return result;
}
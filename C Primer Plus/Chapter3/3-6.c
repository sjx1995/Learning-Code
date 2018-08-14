#include <stdio.h>
int main(void){
    float a;
    double b;
    printf("Please the Quart number of water:");
    scanf("%f",&a);
    b = ( 950 * a )/ 3e-23;
    printf("The number of water molecule is %e",b);
    return 0;
}
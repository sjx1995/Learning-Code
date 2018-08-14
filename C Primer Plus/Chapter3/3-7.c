#include <stdio.h>
int main(void){
    float heightCm;
    float heightInch;
    printf("Please enter your height(inch):");
    scanf("%f",&heightInch);
    heightCm = heightInch * 2.54;
    printf("Your height is %f cm",heightCm);
    return 0;
}
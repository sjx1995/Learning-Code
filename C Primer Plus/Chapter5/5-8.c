#include <stdio.h>
int main(void){
    int divisor, dividend, result;
    printf("This program computes moduli.\n");
    printf("Enter an integer to serve as the second operand: ");
    scanf("%d", &divisor);
    printf("Now enter the first operand: ");
    scanf("%d", &dividend);
    while (dividend > 0){
        result = dividend % divisor;
        printf("%d %% %d is %d\n", dividend, divisor, result);
        printf("Enter next number for first operand(<= 0 to quit): ");
        scanf("%d", &dividend);
    }
    printf("Done");
    return 0;
}
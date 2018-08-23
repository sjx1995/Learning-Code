#include <stdio.h>
int main(void){
    int upper, lower, result, upperNum, lowerNum;
    printf("Enter lower and upper integer limits: ");
    scanf("%d %d", &lower, &upper);
    while (lower < upper){
        result = 0;
        upperNum = upper;
        lowerNum = lower;
        while (lower <= upper){
            result += (lower*lower);
//            printf("%d\n", result);
            lower++;
        }
        printf("The sums of the squares from %d to %d is %d\n", lowerNum*lowerNum, upperNum*upperNum, result);
        printf("Enter next set of limit: ");
        scanf("%d %d", &lower, &upper);
    }
    printf("Done");
    return 0;
}
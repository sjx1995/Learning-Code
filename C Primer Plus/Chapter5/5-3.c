#include <stdio.h>
int main(void){
    int dayInput, weekOutput, dayOutput;
    printf("Enter days:\n");
    scanf("%d", &dayInput);
    while (dayInput > 0){
        weekOutput = dayInput / 7;
        dayOutput = dayInput - weekOutput * 7;
        printf("%d days are %d weeks, %d days.\n", dayInput, weekOutput, dayOutput);
        printf("Enter days:");
        scanf("%d", &dayInput);
    }
    printf("Done!");
    return 0;
}
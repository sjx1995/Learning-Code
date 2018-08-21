#include <stdio.h>
#define MIN_TO_HOUR 60
int main(void){
    int minInput, minOutput, hourOutput;
    printf("Enter MIN :");
    scanf("%d", &minInput);
    while(minInput>0){
        hourOutput = minInput / MIN_TO_HOUR;
        minOutput = minInput - hourOutput * MIN_TO_HOUR;
        printf("%d min equal %d hour %d min.\n", minInput, hourOutput, minOutput);
        printf("Enter MIN(if MIN <= 0, the program will done.):");
        scanf("%d", &minInput);
    }
    printf("Done!");
    return 0;
}
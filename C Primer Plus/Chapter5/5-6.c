#include <stdio.h>
int main(void){
    int count, days, sum;
    count = 0;
    sum = 0;
    printf("Enter days:");
    scanf("%d", &days);
    while (count++ < days){
        sum += (count * count);
    }
    printf("You earn money: $%d\n", sum);
    return 0;
}
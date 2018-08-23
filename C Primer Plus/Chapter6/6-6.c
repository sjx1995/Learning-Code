#include <stdio.h>
int main(void){
    int upper, lower;
    printf("Enter lower limit and upper limit:");
    scanf("%d %d", &lower, &upper);
    printf("%10s %10s %10s\n", "num", "square", "cube");
    for (int i = lower; i <= upper; i++) {
        printf("%10d %10d %10d\n", i, i*i, i*i*i);
    }
    return 0;
}
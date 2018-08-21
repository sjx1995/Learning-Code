#include <stdio.h>
int main(void){
    int num,num_plus;
    printf("Please enter a number:\n");
    scanf("%d", &num);
    num_plus = num + 10;
    while (num <= num_plus){
        printf("%d ", num);
        num++;
    }
    return 0;
}
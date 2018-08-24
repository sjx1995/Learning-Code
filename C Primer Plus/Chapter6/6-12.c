#include <stdio.h>
int main(void){
    int item;
    double result_1 = 0.0, result_2 = 0.0;
    printf("Enter the number of item: ");
    scanf("%d", &item);
    for (int i = 1; i <= item ; i++) {
        result_1 += 1.0 / i;
    }
    printf("第一个序列： %lf\n", result_1);
    for (int j = 1; j <= item ; j += 2) {
        result_2 += 1.0 / j;
    }
    for (int k = 2; k <= item ; k += 2) {
        result_2 -= 1.0 / k;
    }
    printf("第二个序列： %lf\n", result_2);
    return 0;
}
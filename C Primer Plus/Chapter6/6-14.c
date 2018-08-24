#include <stdio.h>
int main(void){
    double arr_num[8];
    double arr_result[8];
    for (int i = 0; i < 8; i++) {
        printf("Enter a number for the first arr: ");
        scanf("%lf", &arr_num[i]);
    }
    arr_result[0] = arr_num[0];
    for (int l = 1; l < 8; l++) {
            arr_result[l] = arr_num[l] + arr_result[l-1];
    }
    printf("Great! Now the arrs are: \n");
    for (int j = 0; j < 8; j++) {
        printf("%10.2lf ", arr_num[j]);
    }
    printf("\n");
    for (int k = 0; k < 8; k++) {
        printf("%10.2lf ", arr_result[k]);
    }
    return 0;
}
#include <stdio.h>
int main(void){
    int arr[8];
    printf("Enter eight numbers: ");
    for (int i = 0; i < 8; i++) {
        scanf("%d", &arr[i]);
    }
    for (int j = 7; j >=0 ; j--) {
        printf("%d ", arr[j]);
    }
    return 0;
}
// arr[0] = 1
// arr[1] = 2
// arr[2] = 4
#include <stdio.h>
#define num 2
int main(void){
    int arr[8];
    int j = 0;
    arr[0] = 1;
    for (int i = 1; i < 8; i++) {
        arr[i] = arr[i-1] * num;
//        printf("%d %d\n", i, arr[i]);
    }
    do {
        printf("%d µÄ %d ´ÎÃİ£º %d\n", num, j, arr[j]);
        j++;
    }
    while (j < 8);
    return 0;
}
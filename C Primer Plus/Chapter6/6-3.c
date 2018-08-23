#include <stdio.h>
int main(void){
    char lets[27] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (int i = 6; i > 0; i--) {
        for (int j = 6; j >= i ; j--) {
            printf("%c", lets[j-1]);
        }
        printf("\n");
    }
    return 0;
}
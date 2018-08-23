#include <stdio.h>
int main(void){
    char ch = 'A';
    int num = 0;
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j <= i; j++) {
            ch = 'A' + num;
            printf("%c", ch);
            num++;
        }
        printf("\n");
    }
    return 0;
}
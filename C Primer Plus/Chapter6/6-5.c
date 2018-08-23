// A -- 65
// Z -- 90
#include <stdio.h>
int main(void){
    char ch;
    printf("Enter a char(A-Z): ");
    scanf("%c", &ch);
    for (int i = 65; i <= ch; i++) {
        for (int j = ((ch-64)*2+1)-((i-64)*2+2); j >= 0; j--) {
            printf(" ");
        }
        for (int k = 65; k <= i; k++) {
            printf("%c", k);
        }
        for (int l = i-1; l >= 65; l--) {
            printf("%c", l);
        }
        printf("\n");
    }
    return 0;
}
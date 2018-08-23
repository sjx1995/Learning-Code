//一般而言，所有的非零值都视为真，只有0被视为假
#include <stdio.h>
int main(void){
    int n = 3;
    while(n){
        printf("%2d is true.\n", n--);
    }
    printf("%2d is false.\n", n);

    n = -3;
    while(n){
        printf("%2d is true.\n", n++);
    }
    printf("%2d is false.\n", n);
    return 0;
}
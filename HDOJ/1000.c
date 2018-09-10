//Problem Description
//    Calculate A + B.
//Input
//    Each line will contain two integers A and B. Process to end of file.
//Output
//    For each case, output A + B in one line.
#include <stdio.h>
int main(void){
    int a, b;
    while (scanf("%d %d", &a, &b) != EOF) {
        printf("%d\n", a+b);
    }
    return 0;
}
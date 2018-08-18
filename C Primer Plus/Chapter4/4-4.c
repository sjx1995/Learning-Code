#include <stdio.h>
int main(void){
    char name[40];
    float cmHeight;
    printf("Enter your name:");
    scanf("%s", name);
    printf("Enter your height(cm):");
    scanf("%f", &cmHeight);
    printf("%s, you are %.3f m tall.", name, cmHeight/100);
    return 0;
}
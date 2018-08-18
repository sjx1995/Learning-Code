#include <stdio.h>
int main(void){
    char firstName[40];
    char lastNmae[40];
    printf("Input your first name:");
    scanf("%s", firstName);
    printf("Input your last name:");
    scanf("%s", lastNmae);
    printf("%s,%s",firstName,lastNmae);
    return 0;
}
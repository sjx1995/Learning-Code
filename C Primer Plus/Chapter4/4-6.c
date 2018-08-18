#include <stdio.h>
#include <mem.h>

int main(void){
    int firstNameLen, lastNameLen;
    char firstName[20], lastName[40];
    printf("Enter your first name:");
    scanf("%s", firstName);
    printf("Enter your last name:");
    scanf("%s", lastName);
    firstNameLen = strlen(firstName);
    lastNameLen = strlen(lastName);
    //字母数与名和姓的结尾对齐
    printf("\n%s %s\n", firstName, lastName);
    printf("%*d %*d\n", firstNameLen, firstNameLen, lastNameLen, lastNameLen);
    //字母数和名和姓开头对齐
    printf("%s %s\n", firstName, lastName);
    printf("%-*d %-*d", firstNameLen, firstNameLen, lastNameLen, lastNameLen);
}
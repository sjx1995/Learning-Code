#include <stdio.h>
#include <mem.h>

int main(void){
    char firstName[40], lastName[40];
    int firstNameLen, lastNameLen;
    printf("Input your name:");
    scanf("%s %s",firstName, lastName);
    firstNameLen = strlen(firstName);
    lastNameLen = strlen(lastName);
    //printf("%d %d", firstNameLen, lastNameLen);
    //打印姓和名，包括双引号
    printf("\"%s %s\"\n", firstName, lastName);
    //在宽度为20的字段左端打印姓和名，包括双引号
    printf("\"%*s %*s\"\n", 18-lastNameLen, firstName, lastNameLen, lastName);
    //在宽度为20的字段左端打印姓和名，包括双引号
    printf("\"%-*s %-*s\"\n", firstNameLen, firstName, 18-firstNameLen, lastName);
    //在比姓名宽度宽三倍的字段中打印姓和名
    printf("%-*s %-*s", firstNameLen, firstName, firstNameLen+lastNameLen+3, lastName);
    return 0;
}
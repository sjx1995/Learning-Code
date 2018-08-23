//倒序打印单词中字母
#include <stdio.h>
#include <mem.h>
int main(void){
    int len;
    char word[40];
    printf("Enter a word: ");
    scanf("%s", &word);
    len = strlen(word);
//    printf("%d", len);
    for (int i = len-1; i >=0; i--) {
        printf("%c", word[i]);
    }
    return 0;
}
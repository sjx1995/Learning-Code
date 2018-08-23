//打印26个小写字母
#include <stdio.h>
int main(void){
    char ch[26];
    ch[0] = 'a';
    for (int i = 0; i < 26; i++) {
        ch[i] = (char)('a'+i);
    }
    for (int j = 0; j < 26; j++) {
        printf("%c ", ch[j]);
    }
    return 0;
}
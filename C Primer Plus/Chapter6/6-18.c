#include <stdio.h>
int main(void){
    int week;
    int friend_number = 5;
    for (week = 1; friend_number <= 150; week++) {
        friend_number = friend_number - week;
        friend_number = friend_number * 2;
        printf("%d weeks ago, Rabnud has %d friends.\n", week, friend_number);
    }
    printf("%d weeks ago, The number of Rabnud's friends more than Dunbar.");
    return 0;
}
#include <stdio.h>
int main(void){
    float mbs,mb;
    printf("Enter speed(mb/s) and size(mb):");
    scanf("%f %f", &mbs, &mb);
    printf("At %.2f megabits per second, a file of %.2f megabytes downloads in %.2f seconds.", mbs, mb, mb*8/mbs);
    return 0;
}
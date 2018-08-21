//1厘米 = 0.0328英尺
//1英尺 = 30.48厘米
//1英寸= 2.540厘米
//1厘米 = 0.394 英寸
#include <stdio.h>
#define CM_TO_FEET 30.48
#define CM_TO_INCH 0.394
int main(void){
    int feet;
    float cm, inch;
    printf("Enter a height in centimeters: ");
    scanf("%f", &cm);
    while (cm > 0){
        feet = cm / CM_TO_FEET;
        inch = (cm - feet * CM_TO_FEET) * CM_TO_INCH;
        printf("%.1f cm = %d feet, %.1f inches\n", cm, feet, inch);
        printf("Enter a height in centimeters (<=0 to quit): ");
        scanf("%f", &cm);
    }
    printf("bye");
    return 0;
}
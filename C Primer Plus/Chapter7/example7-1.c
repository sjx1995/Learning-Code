//if...else...语句
#include <stdio.h>
int main(){
    const int FREEZING = 0;
    float temperature;
    int coldDays = 0;
    int allDays = 0;
    printf("Enter the list of daily low temperatures.\n");
    printf("Use Celsius, and enter q to quit.\n");
    while (scanf("%f", &temperature) == 1) {
        allDays++;
        if (temperature < FREEZING){
            coldDays++;
        }
    }
    if (allDays != 0) {
        printf("%d days total: %.1f%% were below freezing.\n", allDays, 100.0*(float)coldDays/allDays);
    }
    else {
        printf("No data entered!");
    }
    return 0;
}
//code by https://blog.csdn.net/luhuisicnu/article/details/45725221


#include <stdio.h>
#define A '+'
#define S '-'
#define M '*'
#define D '/'
#define E '='
char get_method(void);
float get_float(void);
int main(void)
{
    char method,op;
    float n1,n2,result;

    while((method = get_method()) && method != 'q')
    {
        n1 = get_float();
        if(method == 'd')
        {
            while(1)
            {
                n2 = get_float();
                if(n2 != 0.0)
                    break;
                else
                    printf("when method is \'/\',the scound number can not be 0\n");
            }
        }
        else
            n2 = get_float();
        if(method == 'a')
        {
            result = n1 + n2;
            op = A;
        }
        else if(method == 's')
        {
            result = n1 - n2;
            op = S;
        }
        else if(method == 'm')
        {
            result = n1 * n2;
            op = M;
        }
        else
        {
            result = n1 / n2;
            op = D;
        }
        printf("%.1f %c %.1f %c %.1f\n",n1,op,n2,E,result);
    }
    printf("Bye.\n");
    return 0;
}
char get_method(void)
{
    char ch;

    do
    {
        printf("Input the operation of your choice:\n");
        printf("a.add                s.subtract\n");
        printf("m.multiply         d.divide\n");
        printf("q.quit\n");
        ch = getchar();
        while(getchar() != '\n');
    }while(ch != 'a' && ch != 's' && ch != 'm' && ch != 'd' && ch != 'q');
    return ch;
}
float get_float(void)
{
    float f;
    int status;

    do
    {
        printf("Input the float number:");
        status = scanf("%f",&f);
        if(!status)
            printf("not a float number!\n");
        while(getchar() != '\n');
    }while(!status);
    return f;
}
//转换说明及打印结果
//  %a %A   浮点数、十六进制和p计数法
//  %c      单个字符
//  %d      有符号的十进制
//  %e %E   浮点数，e计数法
//  %f      浮点数，十进制
//  %g %G   根据值不同，自动选择%f、%e。%e格式用于指数小于-4或大于或等于精度时
//  %i      有符号的十进制整数（与%d相同）
//  %o      无符号的八进制
//  %p      指针
//  %s      字符串
//  %u      无符号的十进制整数
//  %x %X   无符号的十六进制整数，使用十六进制数0f/0F
//  %%      打印一个百分比号
//在%和转换字符之间插入修饰符可以修饰基本的转换说明
//  标记    - + 空格 # 0
//  数字    最小字段宽度
//  .数字   精度
//  h       和整型转换说明一起使用，表示 short int 或者 unsigned short int
//  hh      和整型转换说明一起使用，表示 signed char 或者 unsigned char
//  l L ll 等
#include <stdio.h>
#define I 123
#define D 1234.56
#define S "Authentic imitation!"
int main(void){
    printf("字段宽度在打印整数时的效果：\n");
    printf("*%d*\n", I);
    //输出2字符宽度，三位数自动将字符宽度扩大
    printf("*%2d*\n", I);
    //星号中间有10个字符，分别是3个数字和7个空格
    printf("*%10d*\n", I);
    //同样是10个字符宽度输出，'-'标记让数字左对齐显示
    printf("*%-10d*\n", I);
    printf("字段宽度在打印浮点数时的效果：\n");
    //默认打印小数6位
    printf("*%f*\n", D);
    //默认打印小数点右侧6位
    printf("*%e*\n", D);
    //字符宽度4，小数2位，字符宽度自动扩大
    printf("*%5.2f*\n", D);
    //字符宽度3，字符宽度自动扩大，小数1位，舍四进五
    printf("*%3.1f*\n", D);
    //字符宽度10，小数3位，靠右显示
    printf("*%10.3f*\n", D);
    //字符宽度10，小数3位，E前面的数字舍四进五，e计数法，E大写
    printf("*%10.3E*\n", D);
    //字符宽度4，字符宽度自动扩大，'+'标记显示正号，小数2位
    printf("*%+4.2f*\n", D);
    //第一个0是标记，表示用0代替空格，后面的'10'表示字符宽度，小数两位
    printf("*%010.2f*\n", D);
    printf("格式标记：\n");
    //'x'打印十六进制，'#x'打印带'0x'的十六进制
    printf("%x %X %#x\n", 31, 31, 31);
    //修饰符' '正数前打印空格，负数前打印'-'号不打印空格
    printf("**%d**% d**% d**\n", 42, 42, -42);
    //在整型格式中使用精度(%5.3d)生成足够的前导0以满足最小位数的要求，'0'标记会填充满整个字符宽度，'0'标记和精度(%05.3d)一起出现会忽略'0'标记
    printf("**%5d**%5.3d**%05d**%05.3d**\n", 6, 6, 6, 6);
    printf("字符串格式：\n");
    //字段被自动扩大
    printf("[%2s]\n", S);
    //用空格填充整个字段，靠右显示
    printf("[%24s]\n",S);
    //字段宽度24，显示前5个字符，靠右显示
    printf("[%24.5s]\n", S);
    //字段宽度24，显示前5个字符，靠左显示
    printf("[%-24.5s]\n", S);
    return 0;
}
#include <stdio.h>
#include <cs50.h>
//#include <stdbool.h>

bool validTriangle(float a, float b, float c);
int main(void)
{
    float a = get_float("a = ");
    float b = get_float("b = ");
    float c = get_float("c = ");
    bool t = validTriangle(a, b, c);
    printf("%i\n", t);
}

bool validTriangle(float a, float b, float c)
{
    if (a <= 0 || b <= 0 || c <= 0)
    {
        return false;
    }
    if ((a + b <= c) || (a + c <= b) || (b + c <= a))
    {
        return false;
    }
    return true;
}
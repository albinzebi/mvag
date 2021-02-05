#include <stdio.h>

int main(void)
{
    char *name = "Albin";

    printf("%c\n", *name);
    printf("%c\n", *(name + 1));
}
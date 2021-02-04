#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // asking the user for his name, using get_string function
    string name = get_string("What is your name?\n");

    printf("hello, %s\n", name);
}
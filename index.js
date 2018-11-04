
fibonacci()
{
    var num = 1;
    var num2 = 1;
    while(num <= 500 || num2 <= 500)
    {
        console.log(num);
        console.log(num2);
        num = num + num2;
        num2 = num + num2;
    }
}
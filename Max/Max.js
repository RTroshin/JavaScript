var a = +prompt("Введите первое число");
var b = +prompt("Введите второе число");

var max = a;

if (a < b)
	max = b;
else if (a == b)
	alert("Числа равны");

/*
if (a > b)
{
	var max = a;
}
else if (a == b)
{
	alert("Числа равны");
	max = a;
}
else
{
	max = b;
}
*/

alert(max);
// 3

var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число');

if (a<b && b<c || c<b && b<a ){
    alert('Среднее из этих чисел: ' + b)
}else if (a<c && c<b || a>c && c>b ){
    alert('Среднее из этих чисел: ' + c)
}else if (b>a && a>c || b<a && a<c){
    alert('Среднее из этих чисел: ' + a)
}else{ 
    alert('упс..что-то пошло не так')
}

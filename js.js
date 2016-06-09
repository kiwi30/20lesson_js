//1 задание
var mounth = prompt('Какой сейчас месяц?');

if (mounth == 'сентябрь') {
    alert( 'Вы правы!' );
} else {
    alert( 'А вот и неправильно!Сентябрь' ); // любое значение, кроме сентября

//2
    var nmbr=prompt("Введите любое целое число");

    if(nmbr>0){
        alert("number is bigger than 0")
    }
    else if(nmbr<0){
        alert("number is smaller than 0")
    }
    else if(nmbr==0){
        alert("number is equal to 0")
    }


//3

    /*var x = 4, y = 6;

    if (x + y >= 9) {
        result = 'Да!';
    } else {
        result = 'Нет!';
    } */

    var x = 4, y = 6;
    var result;
    result=x+y>=9 ? "Да!" : "Нет!";
    console.log(result);


  //4 это задание совсем не поняла в плане нажатия отмены
    do{
        var limit = prompt("Enter a number bigger than 100 or press esc");
        console.log(limit);
    }
    while (limit<100);

//5

/*var a = +prompt('a?', '');

 if (a == 0) {
 alert( 0 );
 }
 if (a == 1) {
 alert( 1 );
 }

 if (a == 2 || a == 3) {
 alert( '2,3' );
 }*/

    function sw(){
        var a = +prompt('a?', '');
        switch(a){
            case 0: alert("0");
                break;
            case 1: alert("1");
                break;
            case 2:
                alert("2, 3");
                break;
            case 3:
                alert("2, 3");
                break;
            default:alert("other number");

        }
    }


   //6 a loooot of questions.. :(

    function pow(x,y){
        var f=1;
        for(var i=0; i<y; i++){
            console.log(i+1);
            f=f*x;
            console.log(f);
        }
        return f;
    }
    var number=prompt("enter a number you need to raise");
    var index=prompt("index");
    alert(pow(number,index));
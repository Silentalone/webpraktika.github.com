var pass = "1230"
var res;
var a=0;
var b=3;
var error = false;
alert("Бұл бетке өту үшін құпиясөз қажет")
while (res != pass && !error) {
    if (a<b) {
    res = window.prompt("Enter password");
    a++;
    }
    else {
        error = true;
    }
}
if (error) {
    alert("Сізге рұқсат жоқ")
    history.go(-1);
}

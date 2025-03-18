var a = "KK";
var b = 10;
var c = true;
function Add(a, b, c, d) {
    if (b) {
        console.log(a + c);
    }
}
Add(b, c, a);
function add(a, b, c) {
    console.log(a + b);
}
// add(2,3,4);
// add(2);
add(2, 3);
add(2, 3, 4);

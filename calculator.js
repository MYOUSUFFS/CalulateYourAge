var m1 = document.getElementById("view");
function num(ulaa) {
    m1.value += ulaa;
} function enter() {
    i = m1.value;
    y = eval(i);
    m1.value = y;
}
function cle() {
    m1.value = "";
}
function backSpace() {
    let b = m1.selectionStart;
    m1.value -= m1 - b;
}

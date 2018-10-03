module.exports = function solveEquation(equation) {
    //let patern = /\b(\-?)([0-9]*?)\s\*\s(x\^2)\s(\+|-)\s([0-9]*?)\s\*\sx\s(\+|-)\s([0-9]*?)\b/gim;
    let i = 0;
    let sb = 0, //знак числа b
        sc = 0; //знак числа c
    let a = "",
        b = "",
        c = "";

    while (equation[i] != ' ') {
        a += equation[i];
        i++;
    };
    a = Number(a);

    while (equation[i] != '2') {
        i++;
    };
    i += 2;
    if (equation[i] == '-') {
        sb = 1;
    };
    i += 2;
    while (equation[i] != ' ') {
        b += equation[i];
        i++;
    };
    b = Number(b);
    if (sb) {
        b = -b;
    };

    while (equation[i] != 'x') {
        i++;
    };
    i += 2;
    if (equation[i] == '-') {
        sc = 1;
    };
    i += 2;
    while (i < equation.length) {
        c += equation[i];
        i++;
    };
    c = Number(c);
    if (sc) {
        c = -c;
    };

    let D = (Math.pow(b, 2)) - (4 * a * c);
    let d = Math.sqrt(D);
    let x1 = (-b - d) / (2 * a);
    let x2 = (-b + d) / (2 * a);
    x1 = Math.round(x1);
    x2 = Math.round(x2);

    let arr = [];
    arr.push(x1);
    arr.push(x2);
    arr.sort(function(a, b) {
        return a - b;
    });

    return arr;
}

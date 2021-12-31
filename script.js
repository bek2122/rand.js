let col = +prompt('сколько примеров хотите решить');

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomSym () {
    return Math.floor(Math.random() * (5 - 1 ) + 1)
}

for(let i = 0; i < col; i++) {
    let num1 = random(1,20);
    let num2 = random(1,20);
    let sym = randomSym();
    let otv = 0;

    if(sym == 1) {
        otv = num1 + num2;
        sym = '+';
    }else if(sym == 2) {
        otv = num1 - num2;
        sym = '-';
    }else if (sym == 3) {
        otv = num1 * num2;
        sym = '*';
    }else if (sym == 4) {
        otv = num1 / num2;
        sym = '/';
    }

    let ans = +prompt(num1 + sym + num2)

    if(ans == otv) {
        alert(' ваш ответ верный ' + ans)
    }else {
        alert(' ваш ответ не верный ' + ans + ' ! ' + ' верный ответ ' + otv);
    }
}
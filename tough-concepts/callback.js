// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function trudo(some) {
    console.log('3 - started trudo function..')
    console.log('FINAL VALUE: ' + some + '- samba')
}

function canada(num1, num2, trudo) {
    console.log('2 - started canada function..')
    let sum = num1 + num2;
    trudo(sum);
}
console.log('1 - calling canda function..')
canada(5, 5, trudo);


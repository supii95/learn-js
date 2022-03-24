// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

// LEARN: control flow

let print = console.log

print('1 - calling canda function..')

function trudeauIsLongFunction(v) {
    print('3 - started trudo function..')
    print('FINAL VALUE: ' + v)
}

function canada(num1, num2, cb) {
    // cb = trudeauIsLongFunction
    print('2 - started canada function..')
    cb(num1 + num2);
}
canada(5, 5, trudeauIsLongFunction);
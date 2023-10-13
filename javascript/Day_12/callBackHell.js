
// CallBack Hell -->
// Callback hell, also known as the "Pyramid of Doom," is a situation in JavaScript programming where you have a lot of nested callback functions.

function asyncFunction1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async Function 1");
            resolve("Result 1");
        }, 1000);
    });
}

function asyncFunction2(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async Function 2");
            resolve("Result 2");
        }, 1000);
    });
}

function asyncFunction3(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Async Function 3");
            resolve("Result 3");
        }, 1000);
    });
}

asyncFunction1()
    .then(function (result1) {
        return asyncFunction2(result1);
    })
    .then(function (result2) {
        return asyncFunction3(result2);
    })
    .then(function (result3) {
        console.log("Final result: " + result3);
    });

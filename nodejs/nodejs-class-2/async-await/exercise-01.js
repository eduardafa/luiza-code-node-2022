function sum(a, b) {
    let result = a + b;
    let isEven = result % 2;
    return new Promise((resolve, reject) => {
        if (isEven === 0) {
            resolve(console.log(`Success! The sum is equal to ${result}.`));
        } else {
            reject(console.log('Error!'));
        }
    });
}
// test
sum(2, 8);



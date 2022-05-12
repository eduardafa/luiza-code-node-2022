try {
    const info = 'whatever';
    if (typeof info !== 'number') {
        throw {
            name: 'NotANumber',
            message: 'This is not a number!',
        };
    }
} catch (error) {
    console.log(error);
} finally {
    console.log('End!');
}

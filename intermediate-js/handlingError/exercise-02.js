// try {
//     minhaRotina(); // pode lançar três tipos de exceções
// } catch (e) {
//     if (e instanceof TypeError) {
//         // declarações para manipular exceções TypeError
//     } else if (e instanceof RangeError) {
//         // declarações para manipular exceções RangeError
//     } else if (e instanceof EvalError) {
//         // declarações para manipular exceções EvalError
//     } else {
//         // declarações para manipular quaisquer exceções não especificadas
//         logErrors(e); // passa o objeto de exceção para o manipulador de erro
//     }
// }

// try {
//     myroutine(); // pode lançar três tipos de exceções
// } catch (e if e instanceof TypeError) {
//     // declarações para manipular exceções TypeError
// } catch (e if e instanceof RangeError) {
//     // declarações para manipular exceções RangeError
// } catch (e if e instanceof EvalError) {
//     // declarações para manipular exceções EvalError
// } catch (e) {
//     // declarações para manipular quaisquer exceções não especificadas
//     logMyErrors(e); // passa o objeto de exceção para o manipulador de erro
// }

function check(value) {
    if (['apple', 'banana', 'carrot'].includes(value) === false) {
        throw new RangeError(
            'The argument must be an "apple", "banana", or "carrot".'
        );
        // throw {
        //     name: 'test',
        //     message: 'The argument must be an "apple", "banana", or "carrot".',
        // };
    }
}

try {
    check('tomato');
} catch (error) {
    if (error instanceof RangeError) {
        // Handle the error
        console.log('Something went wrong: ', error);
    }
}

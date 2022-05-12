import fetch from 'node-fetch';

async function getUser(userId) {
    let response = await fetch(
        `https://gorest.co.in/public/v2/users/${userId}`
    );
    let userData = await response.json();
    return userData;
}

let [user1, user2] = await Promise.all([getUser(3874), getUser(3872)]);

// const ids = [3874, 3872, 3871, 3869];

// for (let id in ids) {
//     console.log('result....', await getUser(id));

//     // getUser(id).then((result) => console.log(result));
// }

console.log('user1...', user1);
console.log('user2...', user2);

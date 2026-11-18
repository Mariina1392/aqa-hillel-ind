function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json());
}
function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json());
}
Promise.all([getTodo(), getUser()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    Promise.race([getTodo(), getUser()])
    .then(result => {
        console.log('First resolved:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
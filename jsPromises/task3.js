async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');  
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('Error fetching todo:', error);
        throw error;
    }
}

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}
Promise.all([getTodos(), getUsers()])
    .then(([todo, user]) => {
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
Promise.race([getTodos(), getUsers()])  
    .then((result) => {
        console.log('First resolved:', result);
    }) 
    .catch((error) => { 
        console.error('Error:', error);
    });
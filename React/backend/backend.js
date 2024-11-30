const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(cors())

// Sample todo items

const todos = [
    { id: 1, title: "Buy groceries", description: "Milk, Bread, Eggs, Butter" },
    { id: 2, title: "Clean the house", description: "Living room, Kitchen, Bathroom" },
    { id: 3, title: "Finish the project", description: "Complete the final report and presentation" },
    { id: 4, title: "Call a friend", description: "Catch up with John" },
    { id: 5, title: "Read a book", description: "Finish reading 'The Great Gatsby'" },
    { id: 6, title: "Exercise", description: "Go for a 30-minute run" },
    { id: 7, title: "Cook dinner", description: "Prepare a healthy meal" },
    { id: 8, title: "Learn Node.js", description: "Complete the Node.js tutorial" },
    { id: 9, title: "Write a blog post", description: "Draft a new post for the tech blog" },
    { id: 10, title: "Plan a trip", description: "Research destinations and book flights" }
];

app.get('/todos', (req, res) => {
    // Generate a random number of todos to return
    const numTodos = Math.floor(Math.random() * todos.length) + 1;
    const randomTodos = todos.slice(0, numTodos);

    res.json({ todos: randomTodos });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

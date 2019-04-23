const express = require('express');

const DB = require('./data/db.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h2>Blogposts</h2>
    `)
})

server.get('/api/posts', async (req, res) => {
    try {
        const posts = await DB.find(req.query)
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Error retrieving the posts'
        })
    }
})

server.listen(5000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
  });
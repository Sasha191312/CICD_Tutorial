import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('A new request has arrived to index.js');
    res.send("{ 'name': 'Alex' , 'age': 25 }");
});

app.listen(port, () => {
    console.log(`Server is up and runing at port: ${port}`);
});

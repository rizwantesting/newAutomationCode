require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = 5000;
const app = express();

app.get('/', async(req, res)=>{
    res.send("i am called hello 2 ....");
});
app.get('/health', async(req, res)=>{
    res.send("good health hahaha ....");
});

// Start Server
app.listen(PORT, () =>
    console.log('server started at: ', new Date(), '\nOn port ', PORT),
);
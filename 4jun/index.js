const express = require('express');
const connection = require('./config/db');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');

const server = express();
server.use(express.json());
server.use('/user',userRouter);
server.use('/product', productRouter);


server.listen(3000, async() => {
    try{
        await connection;
        console.log('Server is running on port 3000 and db is also connected');
    }catch(error){
        console.log(error)
    }
});





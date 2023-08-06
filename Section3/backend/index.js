const express = require('express');

const app = express();
const port = 5000;

const cors = require('cors');

//import router
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const ContactRouter = require('./routers/contactRouter');
const UtilRouter = require('./routers/util');
const AddproductRouter = require('./routers/addproductRouter');

app.use(cors({
    origin : ['http://localhost:3000']
}));
app.use(express.json());

//middlewares
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/contact', ContactRouter);
app.use('/util', UtilRouter);
app.use('/addproduct', AddproductRouter);
//creating routes
app.get('/',(req, res)=>{
    res.send('response from express server');
})

// /home
app.get('/home',(req, res)=>{
    res.send('response from express home');
})
// /add
app.get('/add',(req, res)=>{
    res.send('response from express add');

})

//starting the server
app.listen(port, () => {
    console.log('server started');
});
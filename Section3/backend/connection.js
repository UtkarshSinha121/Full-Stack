const mongoose = require('mongoose');

 const url = 'mongodb+srv://utkarshsinha:sinha121@cluster0.q2pom5z.mongodb.net/MYDATA?retryWrites=true&w=majority';
mongoose.connect(url)
.then((result) => {
   // console.log(result);
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
});

module.exports = mongoose;


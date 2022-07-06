const express = require('express');// api
const cors = require('cors');//protocal
const bodyParser = require('body-parser');// read json file
const app = express()

app.use(cors());
app.use(bodyParser.json());// can read json
app.use(bodyParser.urlencoded({extended: true}));//can read form, not undefiend


//route 
app.get('/', (req,res) =>{
    res.send('hello world');
})


require("./app/routes/users.route")(app);

//set port
const PORT = process.env.PORT || 3000;//run env port or 3000
app.listen(PORT, () =>{
    console.log('start server at port 3000')
})


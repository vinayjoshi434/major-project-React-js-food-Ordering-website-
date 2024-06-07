const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express();  
const port = 5000;

app.use(cors())

// if you want to use request.body then you should use this  middleware : 
app.use(express.json());


// Available routes that are taken from routes:
app.use('/api/auth' ,require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port, () => {
  console.log(`major project backend app listening on port ${port}`)
})


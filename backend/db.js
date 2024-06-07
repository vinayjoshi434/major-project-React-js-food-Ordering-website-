const mongoose = require('mongoose');
const ConnectionString = 'mongodb://127.0.0.1:27017/major-project';
connectToMongo().catch(err => console.log(err));
async function connectToMongo() {
  await mongoose.connect(ConnectionString);
  console.log("connected successfully !");
}
module.exports = connectToMongo;

// it is a modal :
const mongoose = require('mongoose');
const { Schema } = mongoose;
const NodesSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },


    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now
    },
  });
  module.exports = mongoose.model('note',NodesSchema);


//   CRUD: create, read, update and delete.
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    name: {
        type : String,
        required: true
    },
    dob: {
        type : String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        min: 5,
        max: 500
    },

    description : {
        type: String,
        min: 2,
        max: 1024
    },

    createdAt : {
        type : String,
        required: true, 
    }
});

module.exports = mongoose.model('Posts',PostSchema);

// {
//     "id": "xxx",                  // user ID 
//     "name": "test",               // user name
//     "dob": "",                    // date of birth
//     "address": "",                // user address
//     "description": "",            // user description
//     "createdAt": ""               // user created date
//   }
  
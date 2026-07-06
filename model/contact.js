const mongoose = require('mongoose');
const validator = require('validator');

const surgeonSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(val){
            if(! validator.isEmail(val)){
                throw new Error('Email is not Valid');
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

});


const surgeonModel = mongoose.model('surgeonData', surgeonSchema);


module.exports = surgeonModel;

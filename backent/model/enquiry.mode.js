let mongoose=require('mongoose')
let userEnquirySchema=mongoose.Schema({
 name:{
    type: String,
    require: true
 },
 email:{
 type: String,
 require: true,
 unique: true 
 },
 phone:{
    type: String,
    require: true 
 },
 message:{
    type: String,
    require: true
 }

});
let enquiryModel=mongoose.model("enquiry",userEnquirySchema);
module.exports=enquiryModel;
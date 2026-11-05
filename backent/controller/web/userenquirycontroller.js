const enquiryModel = require("../../model/enquiry.mode");
 const { ObjectId } = require("mongodb");
let enquiryInsert=(req,res)=>{
 let {name,email,phone, message}= req.body;
  let enquiry=new enquiryModel({
    name,
    email,
    phone,
    message
  });
  enquiry.save().then(()=>{
    res.send({status:1, message:"Sucessfully saved"});
  }).catch(()=>{
    res.send({
        status:0,
        message: " server failed"
    })
  })
}
let enquiryList= async(req,res)=>{
let enquiryList=await enquiryModel.find();
 res.status(200).json({status:1, message: "EnquiryList", enquiryList})
}

let enquiryDelete=async(req,res)=>{
let enquiryId=req.params.id;
 let deleteEnquiry=await enquiryModel.deleteOne({ _id: new ObjectId(enquiryId) });
 res.send({
    status:1,
    message:" Enquiry deleted succesfully",
    id:enquiryId,
    Delres:deleteEnquiry
 })
}
let enquiryUpdate=async(req,res)=>{
let enquiryId=req.params.id;
 let {name,email, phone,message}=req.body;
 let updateObj={
    name,
    email,
    phone,
    message
 };
 let updateRes= await enquiryModel.updateOne({ _id: new ObjectId(enquiryId) }, { $set: updateObj })
 res.send({status:1, message: " Entry updated successfully",updateRes})
}

let showData=async (req,res)=>{
  let enId=req.params.id;
  let enquiry=await enquiryModel.findOne({_id: new ObjectId(enId)})
  res.send({status:1, enquiry})
}
module.exports={enquiryInsert,enquiryList,enquiryDelete,enquiryUpdate,showData}
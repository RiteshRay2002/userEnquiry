let express = require('express');
let app = express();
let cors=require('cors')
let mongoose = require('mongoose');

require('dotenv').config();
const path = require('path');
app.use(cors())
const enquiryrouter = require('./route/web/enquiryroute');
require('dotenv').config({ path: path.join(__dirname, '.env') });
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("I am your default server")
})
app.use('/web/api/enquiry',enquiryrouter)
// app.post('/api/enquiry-insert',(req,res)=>{
//     let {name,email,phone, message}= req.body;
//   let enquiry=new enquiryModel({
//     name,
//     email,
//     phone,
//     message
//   });
//   enquiry.save().then(()=>{
//     res.send({status:1, message:"Sucessfully saved"});
//   }).catch(()=>{
//     res.send({
//         status:0,
//         message: " server failed"
//     })
//   })
// })
// app.get('/api/enquiry-user',async(req,res)=>{
//  let enquiryList=await enquiryModel.find();
//  res.status(200).json({status:1, message: "EnquiryList", enquiryList})
// })
// app.delete('/app/enquiry/enquiry-details/:id',async(req,res)=>{
//  let enquiryId=req.params.id;
//  let deleteEnquiry=await enquiryModel.deleteOne({ _id: new ObjectId(enquiryId) });
//  res.send({
//     status:1,
//     message:" Enquiry deleted succesfully",
//     id:enquiryId,
//     Delres:deleteEnquiry
//  })

// })
// app.put('/api/enquiry-update/:id',async(req,res)=>{
//  let enquiryId=req.params.id;
//  let {name,email, phone,message}=req.body;
//  let updateObj={
//     name,
//     email,
//     phone,
//     message
//  };
//  let updateRes= await enquiryModel.updateOne({ _id: new ObjectId(enquiryId) }, { $set: updateObj })
//  res.send({status:1, message: " Entry updated successfully",updateRes})
// })
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database is connected");
    app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})
}).catch((err)=>console.log(err))

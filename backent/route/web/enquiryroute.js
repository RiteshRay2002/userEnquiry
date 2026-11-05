let express=require('express');
const { enquiryList, enquiryInsert, enquiryDelete, enquiryUpdate, showData } = require('../../controller/web/userenquirycontroller');

let enquiryrouter=express.Router();
enquiryrouter.post('/enquiry-insert',enquiryInsert );
enquiryrouter.get('/enquiry-user',enquiryList);
enquiryrouter.delete('/enquiry-delete/:id',enquiryDelete);
enquiryrouter.put('/enquiry-update/:id',enquiryUpdate);
enquiryrouter.get('/single-data/:id',showData)
module.exports=enquiryrouter;
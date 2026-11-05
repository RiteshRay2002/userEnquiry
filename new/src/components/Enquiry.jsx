import React, { useEffect, useState } from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import EnquiryList from '../pages/EnquiryList';

const Enquiry = () => {
  let [enquiryList, setEnquiryList] = useState([])
  let [formData, SetData] = useState({
    name: ' ',
    email: ' ',
    phone: ' ',
    message: ' ',
    _id: ''
  })
  let saveEnquiry = (e) => {
    e.preventDefault();
    // let formData={
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   phone: e.target.phone.value,
    //   message: e.target.message.value
    // }
    if (formData._id) {
      axios.put(`http://localhost:8000/web/api/enquiry/enquiry-update/${formData._id}`, formData)
       .then((res) => {

          toast.success("Enquiry Updated Successfully");
          // console.log(res.data)
          SetData({
            name: ' ',
            email: ' ',
            phone: ' ',
            message: ' ',

          })
          getAllList();
        })
    }
    else {
      axios.post(`http://localhost:8000/web/api/enquiry/enquiry-insert`, formData)
        .then((res) => {

          toast.success("Enquiry Saved Successfully");
          // console.log(res.data)
          SetData({
            name: ' ',
            email: ' ',
            phone: ' ',
            message: ' ',

          })
          getAllList();
        })
    }

  }
  let getAllList = () => {
    axios.get('http://localhost:8000/web/api/enquiry/enquiry-user')
      .then((res) => {
        return res.data
      })
      .then((finalData) => {

        if (finalData.status) {
          setEnquiryList(finalData.enquiryList)
        }
      })
  }
  let getValue = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let oldData = { ...formData };
    oldData[inputName] = inputValue;
    SetData(oldData)
  }
  useEffect(() => {
    getAllList();
  }, [])
  return (
    <div>
      <ToastContainer />
      <h1 className='text-[30px] text-center font-bold py-6'>User Enquiry</h1>
      <div className='grid grid-cols-[30%_auto]'>
        <div className=' bg-gray-200 p-4'>
          <h2 className='text-[20px] font-bold'> Enquiry Form </h2>
          <form action="" onSubmit={saveEnquiry}>

            <div className='py-3'>
              <Label htmlFor="name">Your Name</Label>
              <TextInput type="text" name='name' value={formData.name} onChange={getValue} placeholder="Enter your name" required />
            </div>
            <div className='py-3'>
              <Label htmlFor="email">Your Email</Label>
              <TextInput type="email" name='email' value={formData.email} onChange={getValue} placeholder="Enter your email" required />
            </div>
            <div className='py-3'>
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput type="text" name='phone' value={formData.phone} onChange={getValue} placeholder="Enter your Phone no:" required />
            </div>
            <div className='py-3'>
              <Label htmlFor="message">Your Message</Label>
              <TextInput name='message' value={formData.message} onChange={getValue} placeholder="message..." required rows={4} />
            </div>
            <div className='py-3'>
              <Button type="submit" className='w-[100%] bg-blue-700'>
                {formData._id ? 'Update' : 'Save'}

              </Button>
            </div>
          </form>
        </div>
        <EnquiryList data={enquiryList} getAllList={getAllList} Swal={Swal} setData={SetData} />

      </div>
    </div>
  )
}


export default Enquiry

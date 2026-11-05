import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const EnquiryList = ({ data, getAllList, Swal ,setData}) => {
  // console.log( data);
  let deleteEnquiry = (delId) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",

    }).then((result) => {

      if (result.isConfirmed) {

        axios.delete(`http://localhost:8000/web/api/enquiry/enquiry-delete/${delId}`)
          .then(() => {
            toast.success("Enquiry deleted successfully")
            getAllList();
          })
        // Swal.fire("Saved!", "", "success");
      }
      else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
    });



  }
  let editData=(id)=>{
   axios.get(`http://localhost:8000/web/api/enquiry/single-data/${id}`)
   .then((res)=>{
    return  res.data;
   })
   .then((data)=>{
    console.log(data)
    setData(data.enquiry)
   })
  }

  return (
    <div className='text-center bg-grey-200 p-4'>
      
      <h2 className='text-[20px] font-bold mb-4'> Enquiry Lists</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHead>

            <TableHeadCell>S.No</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>Message</TableHeadCell>
            <TableHeadCell>
              <span >Delete</span>
            </TableHeadCell>
            <TableHeadCell>
              <span >Edit</span>
            </TableHeadCell>

          </TableHead>
          <TableBody className="divide-y">
            {
              data.length >= 1 ?
                data.map((item, index) => {
                  return (
                    <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <TableCell>
                        {index + 1}
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.message}</TableCell>

                      <TableCell >

                        <button onClick={() => deleteEnquiry(item._id)} className='bg-red-500 px-4 py-1 rounded-md'>Delete</button>
                      </TableCell>
                      <TableCell>

                        <button onClick={()=>editData(item._id)} className='bg-blue-500 px-4 py-1 rounded-md'>Edit</button>
                      </TableCell>
                    </TableRow>
                  )
                })
                :
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className='text-center' colSpan={7}>Data not found</TableCell>

                </TableRow>

            }



          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default EnquiryList

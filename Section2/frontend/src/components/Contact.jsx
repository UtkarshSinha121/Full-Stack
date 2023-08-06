
import {useFormik} from 'formik'
     import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
     import * as Yup from 'yup';

const  contactSchema = Yup.object().shape({
  
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string()
     .min(5, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     phone: Yup.string()
     .min(10, 'Invalid number')
     .max(10, 'invalid number')
     .required('Required'),
});
     
     const Contact = () => {

      

        const contactForm = useFormik({
            initialValues: {
              name:'',  
              email :'',
              phone :'',
              message:''
            },

            onSubmit: async (values) => {
              console.log(values);
        
              //sending request to backend
              const res = await fetch('http://localhost:5000/contact/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  'Content-Type' : 'application/json'
                },
               
              });
              console.log(res.status);
        
              if(res.status === 200){
                Swal.fire({
                   icon : 'success',
                   title : 'You are conected!!',
                   text: 'Now Login to Continue'
                });
               
              }else{
                Swal.fire({
                  icon : 'error',
                  title : 'Oops!!',
                  text: 'Some Error Occured'
               });
              }
            },
            validationSchema: contactSchema

//
            
          });
       return (
    <div className='bg'>
    <div className="container py-2 vh-100">
        <h1 className='text-center fw-bold text-white'>Contact Form</h1>
        <div className='d-flex align-item-center justify-content-center'>
            
    <div className="  card w-48 p-4 div1">
     <div className="card-body">
        <form onSubmit={contactForm.handleSubmit}>
            <h2 className="text-center fw-bold my-3 text-white">SEND US A MESSAGE</h2>
            <div className='form-outline'>
            <p className='error-label'>{contactForm.touched.name ? contactForm.errors.name : ''}</p>
            <input type="text" className="form-control mb-2 myinput " placeholder="Full Name" name="name" onChange={contactForm.handleChange} value={contactForm.values.name} />
           </div>
           <div className='for-outline'>
           <p className='error-label'>{ contactForm.touched.email ? contactForm.errors.email : ''}</p>
            <input type=""  placeholder="Email" className="form-control mb-2 myinput" name="email" onChange={contactForm.handleChange} value={contactForm.values.email}/>
            </div>
            <div className='for-outline'>
            <p className='error-label'>{ contactForm.touched.phone ? contactForm.errors.phone : ''}</p>
            <input type="number" className="form-control mb-2 myinput" placeholder="Phone" name="phone" onChange={contactForm.handleChange} value={contactForm.values.phone}/>
            </div>
            <div className='for-outline'>
            <textarea  id="" cols="30" rows="3" className="form-control mb-2 myinput" placeholder="Message" name="message" onChange={contactForm.handleChange} value={contactForm.values.message}></textarea>
            </div>
            <div className='text-center '>
            <button  type="submit"  className="btn btn-primary btn-floating mx-1 ">Send Message</button>
            </div>
        </form>
      </div>
    </div>
    <div className="card w-35 p-4  card2">
        <div className='card-body'>
        <h2 className='fw-bold my-3'>Contact Us</h2>
        <p>We are open for any suggestion or just have to chat</p>

        <div>
        <i class="fa-solid fa-location-dot"></i>
        <p class="mypara"><b>Address:</b>Tirupati Homes, Faizabad Road, Lucknow</p>
        </div>
        <div>
        <i class="fa-solid fa-phone"></i>
        <p class="mypara"><b>Phone:</b>8303240803</p>
        </div>
        <div>
        <i class="fa-solid fa-envelope"></i>
        <p class="mypara"><b>Email:</b>utkarsh@gamil.com</p>
          </div>
        
    </div>
    </div>
        
        
</div> 
</div>   
</div>
       )
     }
     
     export default Contact   
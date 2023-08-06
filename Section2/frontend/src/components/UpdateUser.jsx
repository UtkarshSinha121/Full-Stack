import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';

const UpdateUser = () => {

    const { id } = useParams();

    const [userData, setuserData] = useState({});

    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/user/getbyid/"+id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
    };

    useEffect(()=>{
        fetchUserData();
    }, []);

    const signupForm = useFormik({
        initialValues: {
          name :'',
          email :'',
          password :''
      
        },
    
        onSubmit: async (values) => {
          console.log(values);
    
          //sending request to backend
          const res = await fetch('http://localhost:5000/user/update/'+id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
              'Content-Type' : 'application/json'
            }
          });
          console.log(res.status);
    
          if(res.status === 200){
            Swal.fire({
               icon : 'success',
               title : 'Singnup Sucess!!',
               text: 'Now Login to Continue'
            });
            Navigate('/login');

          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops!!',
              text: 'Some Error Occured'
           });
          }
        },
        // validationSchema: SignupSchema
      });


  return (
    <div>
        <h1 className='text-center'>
         Update User Data
        </h1>
        <h2>{id}</h2>
        <div className='d-flex justify-content-center align-items-center '>
      <div className='mx-5 card w-100'>
        <div className='card-body'>
          <h1 className='text-center fw-bold my-2'>Update form</h1>
          <form onSubmit={signupForm.handleSubmit}>
          <div class="d-flex align-items-center mb-1">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <p className='error-label'>{signupForm.touched.name ? signupForm.errors.name : ''}</p>
                      <input type="text" id=" " class="form-control"  name="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
                      <label class="form-label" for=" ">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row  align-items-center mb-1">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                   
                    <p className='error-label'>{signupForm.touched.email ? signupForm.errors.email : ''}</p>
                      <input type="email" id="ye" class="form-control" name="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
                      <label class="form-label" for="ye">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row  align-items-center mb-1">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                    <p className='error-label'>{signupForm.touched.password ? signupForm.errors.password : ''}</p>
                   <input type="password" id=" " class="form-control" name="password" onChange={signupForm.handleChange} value={signupForm.values.password}/>
                      <label class="form-label" for=" ">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-1">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id=" " class="form-control" />
                      <label class="form-label" for=" ">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex flex-row justify-content-center mb-2">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                  
                  <div class="d-flex flex-row justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-primary btn-lg">Register</button>
                  </div>

          </form>

          </div>

        </div>  

          <div class=" d-flex align-items-center ">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                      className='h-100 w-100' alt="Sample image"/>
          </div>

      </div> 

    </div>
  )
}

export default UpdateUser
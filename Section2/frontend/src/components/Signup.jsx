import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8,'Too Short').required('Required'),
});
const Signup = () => {


  const navigate = useNavigate();

 const [selImage, setselImage] = useState('');

  const signupForm = useFormik({
    initialValues: {
      name :'',
      email :'',
      password :''
  
    },

    onSubmit: async (values) => {
      values.avatar = selImage;
      console.log(values);

      //sending request to backend
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
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
        navigate('/login');
      }else{
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text: 'Some Error Occured'
       });
      }
    },
    validationSchema: SignupSchema
  });

  const uploadFile = async (e) => {
    let file = e.target.files[0];
    setselImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);

    const res = await fetch('http://localhost:5000/util/uploadfile', {
      method: 'POST',
      body: fd
    });

    console.log(res.status);
  };



  return (
  <div className='container py-3 vh-100'>
    <div className='d-flex justify-content-center align-items-center '>
      <div className='mx-5 card w-100'>
        <div className='card-body'>
          <h1 className='text-center fw-bold my-2'>SIGN UP</h1>
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
                  <label htmlFor="">Upload File</label>
            <input type="file" onChange={uploadFile} />
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

export default Signup
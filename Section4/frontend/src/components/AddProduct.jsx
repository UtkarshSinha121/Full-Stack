import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const AddproductSchema = Yup.object().shape({
  product: Yup.string().required('Required'),
  price: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  model: Yup.string().required('Required'),
  review: Yup.string().required('Required'),
 
});

const AddProduct = () => {

    const addproductForm = useFormik({
        initialValues: {
          product :'',
          price :'',
          company :'',
          model : '',
          review : '',
      
        },
    
        onSubmit: async (values) => {
          console.log(values);
    
          //sending request to backend
          const res = await fetch('http://localhost:5000/addproduct/add', {
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
               title : 'Product Added!!',
               text: 'Product is added succesfully'
            });
           
          }else{
            Swal.fire({
              icon : 'error',
              title : 'Oops!!',
              text: 'Some Error Occured'
           });
          }
        },
        validationSchema: AddproductSchema
      });
    


  return (
   <div className="d-flex justify-content-center align-items-center vh-50 ">
      <div className="card w-25  shadow-lg rounded-3">
        <div className="card-body  p-2">
          {/* <i className="fa-solid fa-lock fa-3x d-block text-center" /> */}
          <h2 className="text-center my-3">Signup Form</h2>
          <form onSubmit={addproductForm.handleSubmit}>
            <label htmlFor="">Product Name</label>
            <p className='error-label'>{addproductForm.touched.product ? addproductForm.errors.product : ''}</p>
            <input className="form-control mb-2 rounded-5" type="text" name="product" onChange={addproductForm.handleChange} value={addproductForm.values.product} />
            <label htmlFor="">Price</label>
            <p className='error-label'>{addproductForm.touched.price ? addproductForm.errors.price : ''}</p>
            <input className="form-control mb-2 rounded-5" type="number" name="price" onChange={addproductForm.handleChange} value={addproductForm.values.price}/>
            <label htmlFor="">Company Name</label>
            <p className='error-label'>{addproductForm.touched.company ? addproductForm.errors.company : ''}</p>
            <input className="form-control mb-2 rounded-5" type="text" name="company" onChange={addproductForm.handleChange} value={addproductForm.values.company}  />
            <label htmlFor="">Model</label>
            <p className='error-label'>{addproductForm.touched.model ? addproductForm.errors.model : ''}</p>
            <input className="form-control mb-2 rounded-5" type="text" name="model"  onChange={addproductForm.handleChange} value={addproductForm.values.model} />
            <label htmlFor="">Review</label>
            <p className='error-label'>{addproductForm.touched.review ? addproductForm.errors.review : ''}</p>
            <input className="form-control mb-2 rounded-5" type="text" name="review"  onChange={addproductForm.handleChange} value={addproductForm.values.review} />
            <label htmlFor="">Image</label>
            <input className="form-control mb-2 rounded-5" type="file" name="img"  />
            
            <button className="btn btn-danger w-100 mt-4 rounded-5">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

  


export default AddProduct
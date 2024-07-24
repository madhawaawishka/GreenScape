import React, { useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'


const Add = ({url}) => {

  const [image,setImage]=useState(false);
  const [data,setData]=useState({
      name:"",
      description:"",
      price:"",
      category:"Vegetables"
  })

  const onChangeHandler = (event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler =async (event) =>{
    event.preventDefault();
    const formData=new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/food/add`,formData);
    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Vegetables"
    })
    setImage(false)
    toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }
  
  
  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
          </div>
          <div className="add-product-description flex-col">
              <p>Product description</p>
              <textarea onChange={onChangeHandler}  value={data.description} name="description" rows="6" placeholder='Write content here'></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product category</p>
              <select onChange={onChangeHandler} name="category">
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Dairy">Dairy</option>
                <option value="Beverages">Beverages</option>
                <option value="Meat and Seafood">Meat and Seafood</option>
                <option value="Bakery">Bakery</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Baby Products">Baby Products</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Product price</p>
              <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20'/>
            </div>
          </div>
          <button type='submit' className='add-btn'>Add</button>
          </form>      
    </div>
  )
}

export default Add

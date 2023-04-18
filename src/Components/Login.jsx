import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const Login = () => {
  let [name,setName] = useState();
  let [price,setPrice] = useState();
  let [image,setImage] = useState();
  let [desc,setDesc] = useState();
  let array = [];
  const submit = (e) => {
    e.preventDefault();
    let object = {
      name : name,
      price : `${price}$`,
      image : image,
      desc : desc
    }
    array.push(object)
    console.log(array)
    localStorage.setItem("data", JSON.stringify(array))
  } 
  return (
    <div className='form'>
      <h1>Add your items</h1>
      <Container>
        <form onSubmit={(e)=>submit(e)}>
          Enter product name : <input type="text" className='name' value={name} onChange={(e)=>setName(e.target.value)} /><br />
          Enter product price : <input type="text" className='price' value={price} onChange={(e)=>setPrice(e.target.value)} /><br />
          Select product image : <input type="file" className='image'  onChange={(e)=>setImage(e.target.files[0])}/><br />
          <textarea placeholder='Enter something' cols="30" rows="10" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea><br />
          <input type="submit" value="add" className='submit' />
          {/* <img src={image} /> */}
        </form>
      </Container>
    </div>
  )
}

export default Login

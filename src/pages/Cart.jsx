import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';


function Cart() {
  const dispatch=useDispatch()
  const [total ,setTotal]=useState(0)
  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const navigate=useNavigate()

  const getTotal=()=>{
    if(cartArray.length>0)
    {
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)

    }
  }
  useEffect(()=>{
    getTotal()
  },[cartArray])
  const handleCart=()=>{
    alert('thank you for your oder..your order has beem placed')
    dispatch(emptyCart())
    navigate('/')


  }

  return (
    <div style={{marginTop:'150px'}} >
      <div style={{color:'gold', fontFamily:'serif', fontSize:'40px'}} className='d-flex justify-content-center'>My Wishlist</div>
      {cartArray?.length>0?
      
      <div className='row w-100'>
        
          <div className='col-lg-6 m-5'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(<tr>
               <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img width={'200px'}  src={item.thumbnail} alt="" /></td>
              <td>Price:{item.price}</td>
              <td><button onClick={()=>dispatch(removeFromCart(item.id))} style={{ color:'white'}} className='btn btn-outline-primary'><i class="fa-solid fa-trash"></i></button>
              </td>
              

              </tr>))
                }
              
            </tbody>

          </table>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div className='border shadow p-5' >
            <h2 className='text-info'>Cart summery</h2>
            <h3>Total number of products: <span style={{color:'wheat', fontWeight:'500'}}>{cartArray?.length}</span></h3>
            <h4>total price:₹ {total}</h4>
            <button onClick={handleCart} className='btn btn-danger w-100 mt-3'>Buy Now</button>

          </div>


        </div>

      </div>:
        <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{width:'200px'}} src="https://statementclothing.net/images/cart.gif" alt="" />
            <h4 className='text-primary mt-3' >Your cart is empty</h4>
            <Link to={'/'}><button className='btn btn-outline-success'>Add to cart <i class="fa-solid fa-plus"></i></button></Link>
          </div>

        }
      <div className='d-flex justify-content-center'>
      <Link to={'/'}><button className='btn btn-outline-light mb-1'><i class="fa-solid fa-backward"></i> Back To Home </button></Link>
         
      </div>

      
      

    </div>
    
    
  )
}

export default Cart
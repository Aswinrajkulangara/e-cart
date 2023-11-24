import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


function WishList() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch=useDispatch()
  
  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div>
      <div style={{color:'gold', fontFamily:'serif', fontSize:'40px'}} className='d-flex justify-content-center'>My Wishlist</div>
      <Row className='m-5' style={{marginTop:'150px'}}>

        
      
        { wishlistArray?.length>0?
        wishlistArray.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title className='fa-bolder'>{item.title.slice(0,10)}..</Card.Title>
          <Card.Text>
            <p className='fa-bolder'>{item.description.slice(0,40)}..</p>
            <p className='fa-bolder'>Price:₹ {item.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-evenly'>
  
            <button onClick={()=>dispatch(removeFromWishlist(item.id))} className='btn btn-primary'><i class="fa-solid fa-trash"></i></button>
            <button onClick={()=>handleWishlist(item)} className='btn btn-success'><i class="fa-solid fa-cart-plus"></i> Add To Cart</button>
            
          </div>
          
          
        </Card.Body>
      </Card>
        </Col>))
          : <div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{width:'200px'}} src="https://statementclothing.net/images/cart.gif" alt="" />
            <h4 className='text-primary mt-3' >Your Wishlist is empty</h4>
            <Link to={'/'}><button className='btn btn-outline-success'>Add to wishlist <i class="fa-solid fa-plus"></i></button></Link>
          </div>
      }

      

    </Row>
    <div  className='d-flex flex-column justify-content-center align-items-center mb-2'>
          <Link to={'/'}><button className='btn btn-outline-light'><i class="fa-solid fa-backward"></i> Back To Home </button></Link>
          </div>

    </div>
  )
}

export default WishList
import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';



function Home() {
 const data= useFetch("https://dummyjson.com/products")
 console.log(data);
//  to call function that add value to state
const dispatch=useDispatch()

  return (

    
    <Row className='m-5' style={{marginTop:'150px'}}>
      { data?.length>0?
      data?.map((item)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3} >
      <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title className='fa-bolder'>{item.title.slice(0,10)}..</Card.Title>
        <Card.Text>
          <p className='fa-bolder'>{item.description.slice(0,40)}..</p>
          <p className='fa-bolder'>Price:₹ {item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-evenly'>

          <button onClick={()=>dispatch(addToWishlist(item))} className='btn btn-outline-primary'><i class="fa-solid fa-heart fa-bounce"></i></button>
          <button onClick={()=>dispatch(addToCart(item))} className='btn btn-success'><i class="fa-solid fa-cart-plus"></i> Cart</button>
          
        </div>
        
      </Card.Body>
    </Card>
      </Col>

      ))
        :<p>nothing to display</p>
      }

    </Row>
    
  )
}

export default Home
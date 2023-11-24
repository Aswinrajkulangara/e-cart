import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:"400px", color:'white'}} className='d-flex justify-content-center align-items-center w-100  flex-column bg-primary  '>
    <div className=' d-flex align-items-center justify-content-evenly w-100 '>
    <div className="websites " style={{width:'400px'}}>
    
   <h3 className='mb-3'style={{overflowY:'hidden'}} ><i class="fa-solid fa-cart-shopping fa-beat"></i> <span style={{color:'orange'}} >Wish</span>-CART</h3> 
   <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.dfvhgsd Debitis, iste? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae ducimus perferendis labore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero labore lasdiscosa israi
    </p>
    
    </div>
    <div className="links d-flex  flex-column">
      
      <h4 className='links ' style={{overflowY:'hidden'}}>Links</h4>
      <Link to={"/"} style={{textDecoration:'none'}}>Home page</Link>
      <Link to={"/cart"} style={{textDecoration:'none'}}>Cart</Link>
      <Link to={"/wishlist"} style={{textDecoration:'none'}}>Wishlist</Link>
    

    </div>
    <div className="guides d-flex  flex-column">
    <h4 className='' style={{overflowY:'hidden'}}>Guides</h4>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>bootstrap</Link>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React bootsstrap</Link>


    </div>
    <div className="contacts">
    <h4 className=''style={{overflowY:'hidden'}}>Contact us</h4>
    <div className='d-flex mb-2'>
      <input type='text' className='form-control rounded-3 h-50' placeholder='enter your email'/>
      <button className='btn btn-outline-dark rounded-3  mb-3 ms-2 '>Submit</button>
    </div>
    <div className='d-flex mt-2 justify-content-evenly align-items-center'>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram fa-xl"></i></Link>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-xl"></i></Link>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}><i class="fa-brands fa-x-twitter fa-xl"></i></Link>

    </div>
    </div>

    </div>
    <p className='mt-5'>Copyright @2023 ,Built with react</p>
  </div>
  )
}

export default Footer
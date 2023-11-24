import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';





function Header() {
  // to access the state value 
  const wishlist = useSelector((state)=>state.wishlistReducer)
  // console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);
  
  return (

    

    <Navbar expand="lg" className="bg-dark">
      
      <Container>
        
        
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none', color:'white'}}> <i class="fa-solid fa-cart-shopping fa-bounce"></i>  <span style={{color:'red'}}>WISH</span>-CART</Link></Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto">
            <Nav.Link className='btn border border-secondary ms-2 mt-1'><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}> <i style={{color:'red'}} class="fa-regular fa-heart fa-fade"></i>  WHISLIST <Badge className='ms-1' bg="secondary">{wishlist?.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border border-secondary ms-2 mt-1 ' ><Link to={'/cart'} style={{textDecoration:'none', color:'white'}}> <i style={{color:'goldenrod'}} class="fa-solid fa-cart-shopping "></i> CART <Badge className='ms-1' bg="secondary">{cart?.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    
  )
}

export default Header
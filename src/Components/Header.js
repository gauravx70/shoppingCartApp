import React from 'react';
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa";
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import './Style.css';

const Header = () => {
  const {state:{cart},dispatch,productDispatch} = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}} >
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text>
          <FormControl 
          style={{width:500}} 
          placeholder="Search  Product"
          className='m-auto'
          onChange={(e)=> productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value
          })}
          />
        </Navbar.Text>

        <Nav>
          <Dropdown>
            <Dropdown.Toggle>
              <FaShoppingCart fontSize='24' style={{marginRight:5}}/>
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            
            <Dropdown.Menu className='menu'>
              {cart.length>0 ? (
                <>
                {cart.map((prod)=>{
                  return <span className='cartItem'>
                    <img src={prod.image} alt={prod.name} className='cartImg' />
                    <div className='cartItemDetail'>
                      <span>{prod.name}</span>
                      <span>{prod.price.split('.')[0]}</span>
                    </div>
                    <AiFillDelete
                    fontSize='20'
                    style={{cursor:"pointer"}}
                    onClick={()=> dispatch({
                      type:"Remove_From_Cart",
                      payload:prod
                    })}
                    className='cartDelteIcon'
                    />
                  </span>
                })}
                <Link to='/cart'>
                  <Button style={{width:"95%",margin:"0 8px"}}>
                    Go To Cart
                  </Button> 
                </Link>
                </>
              ): (
                <span style={{padding:10}} className='menu-span'>Cart is Empty</span>
              )}
              
            </Dropdown.Menu>
          </Dropdown>
        </Nav>        
      </Container>
    </Navbar>
  )
}

export default Header;
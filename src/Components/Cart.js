import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Form, FormControl, Image, ListGroup, Row } from 'react-bootstrap';
import { CartState } from '../Context/Context';
import Ratings from './Ratings';
import {AiFillDelete}from 'react-icons/ai';

const Cart = () => {
  const {state:{cart},dispatch} = CartState();
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+ Number(curr.price) * curr.qty ,0))  
  },[cart])

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod)=>(
        
           <ListGroup.Item key={prod.id}>
              <Row>
              <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                 {prod.price}
                </Col>
                <Col md={2}>
                  <Ratings rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control 
                  as='select'
                  value={prod.qty}
                  onChange={(e)=>{
                    dispatch({
                      type: "Change_Cart_Qty",
                      payload:{
                        id:prod.id,
                        qty: e.target.value
                      }
                    })
                  }}
                  >
                    {[...Array(prod.inStock).keys()].map((x)=>(
                      <option key={x+1}>{x+1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button 
                  type='button'
                  variant='light'
                  onClick={()=> dispatch({
                    type:"Remove_From_Cart",
                    payload:prod
                  })}
                  >
                    <AiFillDelete />
                  </Button>
                </Col>
               
              </Row>  
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) Items</span>
        <span style={{fontWeight:700, fontSize:20}}>Total ₹ {total}{}</span>
        <Button disabled={cart.length===0}>Procees To Checkout</Button>
      </div>
    </div>
  )
}

export default Cart;
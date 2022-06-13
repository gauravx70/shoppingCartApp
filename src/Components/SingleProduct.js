import React from 'react'
import { Button, Card } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { CartState } from '../Context/Context';
import Ratings from './Ratings';

const SingleProduct = ({prod}) => {
  const {state:{cart},dispatch} = CartState();
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{paddingBottom:10}}>
            <span>₹{prod.price.split('.')[0]}</span>
            
            {prod.fastDelivery?(
              <div>Fast Delivery</div>
            ):(
              <div>4 days Delivery</div>
            )}
            
            <Ratings rating={prod.ratings}/>
          </Card.Subtitle>

          {cart.some((c)=> c.id === prod.id)?(
               <Button onClick={()=> dispatch({
                 type:"Remove_From_Cart",
                 payload:prod
               })} variant='danger'>Remove From Cart</Button>
          ):(
            <Button onClick={()=> dispatch({
              type:"Add_To_Cart",
              payload:prod
            })} disabled={!prod.inStock}>
            {!prod.inStock ? "Out Of Stock" : "Add to Cart"}
          </Button>
          )} 

       
        
        </Card.Body>

      </Card>
    </div>
  )
}

export default SingleProduct;
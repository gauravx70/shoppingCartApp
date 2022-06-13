import { Button, Form } from 'react-bootstrap';
import { CartState } from '../Context/Context';
import Ratings from './Ratings';

const Filter = () => {
    const {
        productState:{byStock,byFastDelivery,byRating,sort},
        productDispatch
    } = CartState();


    // console.log(byStock,byFastDelivery,byRating,sort,searchQuery);

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>      
        <span>
            <Form.Check
            inline
            label='Ascending'
            name='group1'
            type='radio'
            id={'inline-1'}
            onChange={()=> productDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh"
            })}
            checked={sort === "lowToHigh" ? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label="Descending"
            name='group1'
            type='radio'
            id={'inline-2'}     
            onChange={()=> productDispatch({
                type:"SORT_BY_PRICE",
                payload:"highTolow"
            })}       
            checked={sort==="highTolow" ? true :false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Include Out Of Stock'
            name='group1'
            id={'inline-3'}
            type='checkbox'
            onChange={()=> productDispatch({
                type:"FILTER_BY_STOCK"
            })}
            checked={byStock}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Fast Delivery'
            name='group1'
            type='checkbox'
            id={'inline-4'}
            onChange={()=> productDispatch({
                type:"FILTER_BY_DELIVERY"
            })}
            checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{paddingRight:10}}>Ratings:</label>
            <Ratings rating={byRating} style={{cursor:'pointer'}} onClick={(index)=> productDispatch({
                type: "FILTER_BY_RATING",
                payload : index + 1
            })}/>
        </span>
        <Button 
        variant='light'
        onClick={()=>productDispatch({
            type: "CLEAR_FILTERS"
        })}
        >Clear Filters</Button>
    </div>
  )
}
export default Filter;
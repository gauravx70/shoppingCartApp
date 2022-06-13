import React from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

const Ratings = ({rating,onClick,style}) => {
  return (
    <>
    {[...Array(5)].map((_,index)=>{
        return <span key={index} onClick={() => onClick(index)} style={style}>
            {rating>index?(
                <AiFillStar fontSize='15px' />
            ):(
                <AiOutlineStar fontSize='15px' />
            )}
        </span>
    })

    }
    </>
  )
}

export default Ratings;
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineDoubleRight } from 'react-icons/ai';


export const Button1 = () =>  {

const navigate = useNavigate()
return (
    <button className="button-56" role="button" onClick={() => navigate('Poetry')}> < AiOutlineDoubleRight />
    </button>
  )

}

export default Button1

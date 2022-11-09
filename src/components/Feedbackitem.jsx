import React from 'react'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import Card from './shared/card'


function Feedbackitem({item , handleDelete}) {
   
        
    return (
    <Card >
    <div className='num-display'>{item.rating}</div>
<button className='close' onClick={()=> handleDelete(item.id)}>

<FaTimes color='#0a0f26'/>

</button>
    <div className='text-display'>{item.text}</div>
   
    
    </Card>
  )
}

Feedbackitem.propTypes= {
    item: PropTypes.object.isRequired,
}
export default Feedbackitem

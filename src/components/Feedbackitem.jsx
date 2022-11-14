import React from 'react'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from './shared/card'
import {useContext} from 'react'
import FeedbackContext from './context/FeedbackContext'

function Feedbackitem({item }) {
   const {deleteFeedback,EditFeedback } =useContext(FeedbackContext)
        
    return (
    <Card >
    <div className='num-display'>{item.rating}</div>
<button className='close' onClick={()=> deleteFeedback(item.id)}>
<FaTimes color='#0a0f26'/>


</button>
<button className="edit" onClick={() => EditFeedback(item)}>
<FaEdit color='#0a0f26 '/>

</button>
    <div className='text-display'>{item.text}</div>
   
    
    </Card>
  )
}

Feedbackitem.propTypes= {
    item: PropTypes.object.isRequired,
}
export default Feedbackitem

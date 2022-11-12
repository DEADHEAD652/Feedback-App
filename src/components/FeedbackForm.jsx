import React from 'react'
import Card from './shared/card'
import {useState} from 'react'
import Button from './shared/Button'
import Rating from './RatingSelect'

function FeedbackForm() {
 const [text , setText]  = useState('')
 const [rating , setRating]  = useState()
 const [btnDisabled , setBtnDisabled]  = useState(true)
 const [message , setMessage]  = useState('')
const handleTextChange = (e) => { 
    if(text === ''){setBtnDisabled(true)
    setMessage(null)
    }
    else if(text !== '' && text.trim().length <= 10 ){

 setBtnDisabled(true)
 setMessage('Text must be atleast 10 characters')

    }
    else{
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value) 
}
  
    return (
    <Card>
<form action="" >

    <h2>How would you rate your service with us?</h2>
    <Rating select={(rating) => {
        console.log(rating)
    }} />
    <div className="input-group">

<input onChange={handleTextChange} type="text" placeholder='Write a review'  value={text || ''}/>
<Button type='submit' isDisabled={btnDisabled}>Send</Button>

    </div>

    {message && <div className='message'>{message}</div>}
</form>

    </Card>
  )
}

export default FeedbackForm

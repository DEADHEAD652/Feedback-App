import{createContext , useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
 const [feedback,setFeedback] = useState([{

id:1,
text:'this item is from context',
rating :10

 },
 {

    id:2,
    text:'this item is from context',
    rating :1
    
     },{

        id:3,
        text:'this item is from context',
        rating :10
        
         }
 




])

const [feedbackEdit , setFeedbackEdit] = useState({
item:{},
edit:false


})

//adding 
 const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
     setFeedback([newFeedback ,...feedback])

} 
//delete feedback
 const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete ?')){
        setFeedback(feedback.filter((item) => 
           item.id !== id
        ))
    }
    
}
//update feedback item
const updateFeedback =(id,updItem)=>{

setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item ))


)
}




//set item to updated
const EditFeedback = (item) =>{

setFeedbackEdit({
   item,edit:true
})

}




return <FeedbackContext.Provider value={{
feedback,feedbackEdit,
deleteFeedback,
addFeedback,EditFeedback,updateFeedback


}}>
    {children}
</FeedbackContext.Provider>

}

export default FeedbackContext
import React from 'react'
import './Banner.css'
import NewMobile from './newMobile'
import Mi from './mi'
export default function Banner() {
  const mi = [
    {
      "Model": "Redmi 9 Activ",
      "OfferPrice": "₹ 7,499*",
      "OriginalPrice": "₹ 12999",
      "pic": "https://i03.appmifile.com/842_operator_in/22/09/2022/ff54fdb46a853a5f707ac705f93b1a8b.jpg?thumb=1&w=606&h=404&width=606&height=404"
    },

    {
       "Model": "Redmi 10 Prime 2022",
      "OfferPrice": "₹ 9,449*",
      "OriginalPrice": "₹ 14999",
      "pic":"https://i03.appmifile.com/17_operator_in/22/09/2022/01145efa07d05bfe808e1d5a33b10544.jpg?thumb=1&w=606&h=404&width=606&height=404"
    },
    {
      "Model": "Redmi 10 Prime",
     "OfferPrice": "₹ 10,999",
     "OriginalPrice": "₹ 14999",
     "pic":"https://i03.appmifile.com/143_operator_in/22/09/2022/4e6a9ad7246dfe4982cc777b7b10b732.jpg?thumb=1&w=606&h=404&width=606&height=404"
   },
   {
    "Model": "Redmi 9i Sport",
   "OfferPrice": "6,999*",
   "OriginalPrice": "₹ 10999",
   "pic":"https://i03.appmifile.com/17_operator_in/22/09/2022/01145efa07d05bfe808e1d5a33b10544.jpg?thumb=1&w=606&h=404&width=606&height=404"
 },
 {
  "Model": "Xiaomi 11i Hypercharge 5G",
 "OfferPrice": "₹ 20,749*",
 "OriginalPrice": "₹ 31999",
 "pic":"https://i03.appmifile.com/480_operator_in/22/09/2022/2b2fd54bf3e139f48bae298c34f8584b.jpg?thumb=1&w=606&h=404&width=606&height=404"
},
{
  "Model": "Xiaomi 12 Pro",
 "OfferPrice": "₹ 45,499*",
 "OriginalPrice": "₹ 84999",
 "pic":"https://i03.appmifile.com/567_operator_in/22/09/2022/19a8a16ecf98fdee42d52cc92db21ab9.jpg?thumb=1&w=606&h=404&width=606&height=404"
}
  ]
  const addNewMobileHandler= (mobile)=>{
    console.log(mobile);
  }
    return (

    <div>
      <div className='new-mobile-container'>
        <NewMobile addMobile={addNewMobileHandler}/>
      </div>
      <div className='container'>
    
      {
      mi.map((mi) => {
        return <Mi key={mi.Model} midata={mi}/>
      })
    }
     {/* <Mi/>
     <Mi/>
     <Mi/>
     <Mi/>
     <Mi/>
     <Mi/> */}
    </div>
    </div>

    
  )
}
  
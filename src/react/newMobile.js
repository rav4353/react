import { useState } from 'react';


function NewMobile (props){
    const[newMobile, setNewMobile] = useState({ 
        Model: "",
        OfferPrice: "",
        OriginalPrice: "",
        pic: ""
    });
    const inputHandler = (e)=>{
        console.log(newMobile);
        // setNewMobile({[e.target.name]: e.target.value})
        setNewMobile((previousState)=>{

            return{...previousState, ...{[e.target.name]: e.target.value}}
        })
    }
   const newMobileHandler =(e) => {
    e.preventDefault();
    // console.log(newMobile);
   };

    return(<div className="login">
        <h1>Mi</h1>
        <form onSubmit={newMobileHandler}>
        <label>Enter Model:
<input type="text" placeholder="model" name= "Model" value={newMobile.Model || ""} onChange={inputHandler}/>
</label>

<label>Enter model:
<input type="text" placeholder="Offer Price" name= "OfferPrice" value={newMobile.OfferPrice || ""} onChange={inputHandler}/>
</label>
<label>Enter color:
<input type="text" placeholder="Original Price" name= "OriginalPrice" value={newMobile.OriginalPrice || ""} onChange={inputHandler}/>
</label>
<button>Sumbit</button>
</form>
    </div>);
}

export default NewMobile;
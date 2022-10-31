

function Mi(props){
    return(
      
        <div className='mobile'>
        <div className='img'><img src={props.midata.pic}/></div>
        <div className='model'>{props.midata.Model}</div>
        <div className='cart'>
        <div className='price'>
          <div className='offer-price'>{props.midata.OfferPrice}</div>
          <div className='original-price'><s>{props.midata.OriginalPrice}</s></div>
        </div>
        <div className='buynow'>Buy now</div>
      </div>
        </div>
        
    )
}

export default Mi;
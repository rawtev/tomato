import React from 'react';
import StarRateIcon from '@material-ui/icons/StarRate';

function ItemCard(props) {
    return (
        <div>
            <div className="itemCard my-3">
                <div className="d-flex">
                    <img className="itemImage" src="https://images.unsplash.com/photo-1517686668014-1740ede39ecb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
                    <div className="itemDetails w-75">
                        <div className="ID d-flex justify-content-between w-100">
                            <div className="">
                                <div className="itemTitle">Pan Cake</div>
                                <div className="itemBadge">
                                    <div className="ibadge">NEW</div>
                                </div>
                                <div className="itemRatingVote">
                                        <StarRateIcon/>
                                        <StarRateIcon/>
                                        <StarRateIcon/>
                                        <StarRateIcon/>
                                        <StarRateIcon/>
                                        8 votes
                                </div>
                                <div className="itemPrice">₹325</div>
                            </div>
                            
                            {(props.chckState) ? <div className="itemAddBtn" onClick={()=> props.change(false)}>- ADD +</div>
                                               :  <div className="itemAddBtn" onClick={()=> props.change(true)}>ADD +</div> }
                        </div>
                        <div className="itemDescription w-75">nnvksjnkcnkivlhbculsbib  lwnflnfn fnlnfl nlfn lwfnlwfnlwln </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;

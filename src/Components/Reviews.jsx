import { React, useState } from 'react';
import RestInfo from './RestInfo';

function Reviews() {

    const [data, setData] = useState({
        userName: "",
        reviewNote: ""
    });

    const [review, setReview] = useState([]);

    const inputValue = (e) => {
        const { name, value } = e.target;
        setData((obj) => {
            return {
                ...obj,
                [name]: value,
            }
        })
    }

    const submitData = () => {
        setReview((newObj) => {
            return [
                ...newObj,
                data
            ]
        })

        setData(() => {
            return {
                userName: "",
                reviewNote: ""
            }
        })
    }

    return (
        <>
            <div>
                <div className="reviewTitle">Hari Raj - Reviews </div>
                <div className="reviewContainer d-flex">
                    <div className="reviewLists">                       {/* Review lists*/}
                        {review.map((item, index) => {
                            return (
                                <>
                                    <div className="reviewCard">         {/*review card*/}
                                        <div>{item.userName}</div>
                                        <div>Rating</div>
                                        <div>{item.reviewNote}</div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="addReview">
                        <div>
                            <div>Rate your delivery experience</div>
                            <div>1*2*3*4*5*</div>
                            <div>Write a Review</div>
                        </div>
                        <div>
                            <div>Review Highlights</div>
                            <div>
                                <input type="text" name="userName" value={data.userName} onChange={inputValue}></input>
                                <input type="text" name="reviewNote" value={data.reviewNote} onChange={inputValue}></input>
                                <button onClick={submitData}>Add Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RestInfo />
        </>
    )
}

export default Reviews;
